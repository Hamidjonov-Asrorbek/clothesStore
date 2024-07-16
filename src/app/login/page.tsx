"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import React, { useState } from "react";
import { auth } from "../../../firebase/config";
import { useRouter } from "next/navigation";
import { message } from "antd";

interface LoginData {
  email: string;
  password: string;
}

function Login() {
  const router = useRouter(); // Use useRouter instead of useNavigate
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    firebase: "",
  });

  const validateInputs = () => {
    let emailError = "";
    let passwordError = "";

    if (!loginData.email.trim()) {
      emailError = "Email is required.";
    } else if (!validateEmail(loginData.email)) {
      emailError = "Invalid email address.";
    }

    if (!loginData.password.trim()) {
      passwordError = "Password is required.";
    } else if (!validatePassword(loginData.password)) {
      passwordError = "Password must be at least 6 characters long.";
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError, firebase: "" });
      return false;
    }

    return true;
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user.providerData));
      router.push("/");
      message.success("Welcome site!");
    } catch (error: any) {
      const errorCode = error.code;
      let errorMessage = "Failed to sign in. Please check your credentials.";

      if (errorCode === "auth/user-not-found") {
        errorMessage = "User not found. Please check your email.";
      } else if (errorCode === "auth/wrong-password") {
        errorMessage = "Wrong password. Please try again.";
      }

      setErrors({ ...errors, firebase: errorMessage });
    } finally {
      setLoginData({ email: "", password: "" });
    }
  };

  return (
    <form
      className="w-1/3 flex flex-col gap-5 m-auto py-10"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl text-center">Login</h1>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="email"
          className="grow"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
      </label>
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="password"
          className="grow"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
      </label>
      {errors.password && <p className="text-red-500">{errors.password}</p>}
      {errors.firebase && <p className="text-red-500">{errors.firebase}</p>}
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <button onClick={() => router.push("/")} className="btn btn-accent">
        Guest user
      </button>
      <p className="text-center">
        Don't have an account?{" "}
        <Link href="/signup" className="link text-primary">
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default Login;
