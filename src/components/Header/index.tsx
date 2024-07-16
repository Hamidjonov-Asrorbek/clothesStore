"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../public/SHOP.CO.svg";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser);
    }
  }, [user]);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/login");
        localStorage.setItem("user", null as any);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const userPhotoURL = user ? JSON.parse(user)?.photoURL : null;
  return (
    <section className="py-6 bg-white">
      <div className="container">
        <div className="navbar flex justify-between">
          {/* logo */}
          <div>
            <Link href={"/"}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          {/* navbar items */}
          <nav className="flex items-center justify-center gap-6">
            <select
              name=""
              className="select bg-white rounded-lg border-black"
              id=""
            >
              <option value="">Shop</option>
              <option value="">Clothes</option>
              <option value="">Shoes</option>
              <option value="">Accessories</option>
            </select>
            <Link
              href="/onsale"
              className="text-black transition-colors duration-300 hover:text-blue-500"
            >
              Onsale
            </Link>
            <Link
              href="/new-arrivals"
              className="text-black transition-colors duration-300 hover:text-blue-500"
            >
              New Arrivals
            </Link>
            <Link
              href="/brands"
              className="text-black transition-colors duration-300 hover:text-blue-500"
            >
              Brands
            </Link>
          </nav>
          {/* input search */}
          <div className="form-contro">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered bg-white w-24 md:w-auto"
            />
          </div>
          {/* cart and user */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    alt="User Avatar"
                    src={
                      userPhotoURL ||
                      "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
                    }
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
