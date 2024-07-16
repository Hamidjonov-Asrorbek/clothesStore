"use client";
import { Modal, Rate } from "antd";
import { tree } from "next/dist/build/templates/app-page";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import ProductSection from "../ProductSection";

export default function ProductDetail({ data }: any) {
  const [img, setImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  function addToCart() {
    const cart = localStorage.getItem("cart");
    if (user) {
      if (cart) {
        const cartData = JSON.parse(cart);
        cartData.push({ ...data, quantity });
        localStorage.setItem("cart", JSON.stringify(cartData));
      } else {
        localStorage.setItem("cart", JSON.stringify([{ ...data, quantity }]));
      }
    } else {
      showModal();
    }
  }
  return (
    <>
      <section className="py-16">
        <div className="container flex justify-between gap-10">
          <div className="images w-[50%] flex lg:flex-row flex-col-reverse gap-3">
            <div className="flex flex-col lg:flex mb-0 items-center justify-between">
              <Image
                src={data?.images[0]}
                alt="image"
                width={150}
                height={165}
                className="rounded-lg h-[165px] w-[150px]"
                style={img === 0 ? { border: "2px solid black" } : {}}
                onClick={() => setImg(0)}
              />
              <Image
                src={data?.images[1]}
                alt="image2"
                width={150}
                height={165}
                className="rounded-lg h-[165px] w-[150px]"
                style={img === 1 ? { border: "2px solid black" } : {}}
                onClick={() => setImg(1)}
              />
              <Image
                src={data?.images[2]}
                alt="image3"
                width={150}
                height={165}
                className="rounded-lg h-[165px] w-[150px]"
                style={img === 2 ? { border: "2px solid black" } : {}}
                onClick={() => setImg(2)}
              />
            </div>
            <div>
              <Image
                src={data?.images[img]}
                alt="image"
                width={400}
                height={500}
                className="rounded-lg w-[400px]"
              ></Image>
            </div>
          </div>

          <div className="content w-[50%]">
            <h1 className="text-4xl font-bold">{data?.name}</h1>
            <div className="rating gap-1 flex my-2 mt-5">
              <Rate disabled defaultValue={data.rating} />
              <span>{data.rating}/5</span>
            </div>
            <p className="text-3xl text-bold my-5">${data?.price}</p>
            <p className="mb-5">{data?.description}</p>
            <div className="pb-8 mb-6 border-b border-gray-700">
              <p className="mb-4">Select color</p>
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: data?.color }}
              ></div>
            </div>
            <div>
              <p className="mb-4">Choose size</p>
              <div className="sizes flex gap-3 mb-8">
                {/* Small Radio Button */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-small"
                    defaultChecked
                  />
                  <span className="ml-2">Small</span>
                </label>

                {/* Medium Radio Button */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-medium"
                  />
                  <span className="ml-2">Medium</span>
                </label>

                {/* Large Radio Button */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-large"
                  />
                  <span className="ml-2">Large</span>
                </label>

                {/* Extra Large Radio Button */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio radio-xlarge"
                  />
                  <span className="ml-2">Extra Large</span>
                </label>
              </div>
            </div>
            <div className="cart flex items-center gap-3">
              <div className="flex items-center py-3 px-4 bg-gray-200 rounded-3xl">
                <button
                  className="px-4 text-black hover:bg-gray-300 hover:rounded-full  border-none"
                  onClick={decrement}
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-12 text-center bg-transparent border-none focus:ring-0"
                  value={quantity}
                  readOnly
                />
                <button
                  className="px-4 text-black hover:bg-gray-300 hover:rounded-full  border-none"
                  onClick={increment}
                >
                  +
                </button>
              </div>
              <button
                className="btn rounded-3xl py-4 px-20 text-white bg-black hover:bg-white hover:text-black"
                onClick={addToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
          <Modal title="Basic Modal" open={isModalOpen}>
            <h1 className="text-2xl text-center text-red-600">
              You are not logged in. Please login or sign up to continue.
            </h1>
            <Link
              href="/login"
              className="btn bg-black text-white rounded-3xl py-4 px-16"
              onClick={() => setIsModalOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="btn bg-black text-white rounded-3xl py-4 px-16"
              onClick={() => setIsModalOpen(false)}
            >
              Sign Up
            </Link>
          </Modal>
        </div>
      </section>

      {/* You might also like */}
      <section>{/* <ProductSection /> */}</section>
    </>
  );
}
