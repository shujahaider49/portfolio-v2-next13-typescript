"use client"

import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Experiences: React.FC = () => {
  return (
    <>
    <section>
      <div className=" text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <Fade direction='left'>
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">My Experiences</p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
            Executed diverse projects with a strategic touch, consistently delivering impactful results in my professional journey.
            </p>
            <a
              href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
            </Fade>
          </div>
          <div className="ml-28 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <Fade direction='up'>
                    <p className="mb-3 text-base text-yellow-300">8 Nov 2021 - 29 May 2022</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Account Assist</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      (Knight Rider Delivery Services - Dubai,UAE)
                    </p>
                    </Fade>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                  <Fade direction='up'>
                    <p className="mb-3 text-base text-yellow-300">22 Feb 2023 - 20 June 2023</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Unity 3D Developer</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      (RootPointer - Lahore,Pakistan)
                    </p>
                    </Fade>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-10 text-right">
                  <Fade direction='up'>
                    <p className="mb-3 text-base text-yellow-300">24 Aug 2023</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">React/Nextjs Developer</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      (Hadi E-Learning - Lahore,Pakistan)
                    </p>
                    </Fade>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4">
                  </div>
                </div>
              </div>
              <Fade direction='up'>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Experiences;
