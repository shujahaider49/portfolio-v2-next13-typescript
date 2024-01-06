"use client"

import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="md:w-2/3 text-center">
        <Fade direction="down">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            Next.js and React.js
          </span>
          <br />experiences with passion.
        </h1>
        </Fade>
        <p className="mt-6 text-lg font-light text-[#C5C5C5]">
          Hey there! I'm a frontend wizard with expertise in React and Next.js. I turn ideas into engaging web experiences. Let's build something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
