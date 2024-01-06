import React from "react";
import About from "./_components/about";
import { Metadata } from "next";
import Experiences from "./_components/experiences";

export const metadata: Metadata = {
  title: "About - Shuja Haider",
};

const page = () => {
  return (
    <>
      <div className="">
        <ul className="circles  blur-sm">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <About />
        <div>
          <Experiences />
        </div>
      </div>
    </>
  );
};

export default page;
