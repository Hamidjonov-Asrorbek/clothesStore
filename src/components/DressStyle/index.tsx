import Image from "next/image";
import React from "react";
import casual from "../../../public/casual.png";
import formal from "../../../public/formal.png";
import party from "../../../public/party.png";
import gym from "../../../public/gym.png";

function DressStyle() {
  return (
    <section>
      <div className="container bg-stone-200 rounded-[40px] p-16">
        <h2 className="text-5xl font-bold text-center text-black mb-16">
          BROWSE BY dress STYLE
        </h2>
        <div className="div">
          <div className="flex gap-5">
            <Image src={casual} alt="casual"></Image>
            <Image src={formal} alt="formal"></Image>
          </div>
          <div className="flex gap-5">
            <Image src={party} alt="party"></Image>
            <Image src={gym} alt="gym"></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DressStyle;
