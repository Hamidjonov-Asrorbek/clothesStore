import React from "react";
import heroImg from "../../../public/heroImg.png";
import Image from "next/image";
import calvin from "../../../public/calvin.png";
import vector from "../../../public/Vector.png";
import zara from "../../../public/zara.png";
import prada from "../../../public/prada.png";
import gucci from "../../../public/gucci.png";

export default function Hero() {
  return (
    <>
      <section className="pt-6 bg-base-200">
        <div className="container relative">
          <div className="flex flex-col lg:flex-row-reverse">
            <Image src={heroImg} alt="heroImg"></Image>
            <div className="mt-20">
              <h1 className="text-6xl text-black w-full max-w-xl font-extrabold">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="py-8 w-full max-w-xl">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="btn rounded-3xl py-4 px-16 text-white bg-black hover:bg-white hover:text-black mb-12">
                Shop Now
              </button>
              <div className="flex items-start justify-start gap-16">
                <div className="item1">
                  <h2 className="text-4xl text-black font-bold">200+</h2>
                  <p>International Brands</p>
                </div>
                <div className="item2">
                  <h2 className="text-4xl text-black font-bold">2,000+</h2>
                  <p>High-Quality Products</p>
                </div>
                <div className="item3">
                  <h2 className="text-4xl text-black font-bold">30,000+</h2>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={calvin}
            alt="calvin"
            className="absolute bottom-4 right-40 "
          ></Image>
          <Image
            src={vector}
            alt="vector"
            className="absolute bottom-4 left-5"
          ></Image>
        </div>
      </section>
      <section className="bg-black py-11 ">
        <div className="container">
          <div className="gap-28 flex justify-center items-center">
            <Image src={zara} alt="zara"></Image>
            <Image src={prada} alt="prada"></Image>
            <Image src={gucci} alt="gucci"></Image>
          </div>
        </div>
      </section>
    </>
  );
}
