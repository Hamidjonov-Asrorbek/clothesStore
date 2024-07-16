"use client";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "../../../firebase/config";
import { message } from "antd";

interface SignUpData {
  email: string;
  password: string;
  displayName: string;
  photoURL: string;
}

const SignUp: React.FC = () => {
  const router = useRouter();
  const [signData, setSignData] = useState<SignUpData>({
    email: "",
    password: "",
    displayName: "",
    photoURL: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    firebase: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const validatePassword = (password: string) => {
    return password.length >= 6; // Example: Password must be at least 6 characters long
  };

  const validateInputs = () => {
    let emailError = "";
    let passwordError = "";

    if (!validateEmail(signData.email)) {
      emailError = "Invalid email address.";
    }

    if (!validatePassword(signData.password)) {
      passwordError = "Password must be at least 6 characters long.";
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError, firebase: "" });
      return false;
    }

    setErrors({ email: "", password: "", firebase: "" });
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signData.email,
        signData.password
      );

      const user = userCredential.user;

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: signData.displayName,
          photoURL: signData.photoURL,
        });
      }

      localStorage.setItem("user", JSON.stringify(user?.providerData[0]));
      message.success("Sign up successful!");
      router.push("/");
    } catch (error: any) {
      const errorCode = error.code;
      let errorMessage = "Failed to sign up. Please check your credentials.";

      if (errorCode === "auth/email-already-in-use") {
        errorMessage = "Email already in use. Please use another email.";
      }

      setErrors({ ...errors, firebase: errorMessage });
    }
  };

  return (
    <form
      className="w-1/3 flex flex-col gap-5 m-auto py-10"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl text-center">Sign Up</h1>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="email"
          className="grow"
          placeholder="Email"
          value={signData.email}
          onChange={(e) => setSignData({ ...signData, email: e.target.value })}
        />
      </label>
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="password"
          className="grow"
          placeholder="Password"
          value={signData.password}
          onChange={(e) =>
            setSignData({ ...signData, password: e.target.value })
          }
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Username"
          value={signData.displayName}
          onChange={(e) =>
            setSignData({ ...signData, displayName: e.target.value })
          }
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Image link"
          value={signData.photoURL}
          onChange={(e) =>
            setSignData({ ...signData, photoURL: e.target.value })
          }
        />
      </label>
      {errors.password && <p className="text-red-500">{errors.password}</p>}
      {errors.firebase && <p className="text-red-500">{errors.firebase}</p>}
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 link">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
