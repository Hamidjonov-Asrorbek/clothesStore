import React from "react";

export default function FormSection() {
  return (
    <section>
      <div className="container flex justify-between bg-black rounded-[20px] py-9 px-16">
        <h2 className="w-full max-w-xl text-4xl font-bold text-center text-white">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <form action="" className="flex flex-col gap-3">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Enter your email address"
            />
          </label>
          <button className="btn bg-white rounded-3xl py-4 px-16 hover:bg-black hover:text-white mx-auto">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}
