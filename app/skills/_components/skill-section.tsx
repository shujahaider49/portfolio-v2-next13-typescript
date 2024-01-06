"use client"

import React from 'react';
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { FaUnity } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';




interface Skill {
  id: number;
  title: string;
  description?: string;
  color: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
 {
    id: 1,
    title: 'HTML-5',
    color: 'bg-green-100',
    icon: <TiHtml5 size={70} fill="#e34c26"/>,
  },
  {
    id: 2,
    title: 'CSS-3',
    color: 'bg-blue-100',
    icon: <FaCss3Alt size={70} fill="#264de4" />,
  },
  {
    id: 3,
    title: 'Javascript',
    color: 'bg-blue-100',
    icon: <IoLogoJavascript size={70} fill="#F0DB4F" />,
  },
 {
    id: 4,
    title: 'TypeScript',
    color: 'bg-green-100',
    icon: <BiLogoTypescript size={70} fill="#007acc"/>,
  },
  {
    id: 5,
    title: 'Bootstrap',
    color: 'bg-blue-100',
    icon: <FaBootstrap size={70} fill="#563d7c" />,
  },
  {
    id: 6,
    title: 'Tailwind Css',
    color: 'bg-blue-100',
    icon: <SiTailwindcss size={70} fill="#06b6d4" />,
  },
 {
    id: 7,
    title: 'JQuery',
    color: 'bg-green-100',
    icon: <SiJquery size={70} fill="#0868ac"/>,
  },
  {
    id: 8,
    title: 'React Js',
    color: 'bg-blue-100',
    icon: <FaReact size={70} fill="#61dbfb" />,
  },
  {
    id: 9,
    title: 'Next Js',
    color: 'bg-blue-100',
    icon: <SiNextdotjs size={70}  />,
  },
  {
    id: 10,
    title: 'C#',
    color: 'bg-blue-100',
    icon: <SiCsharp size={70} fill="#684D95"/>,
  },
  {
    id: 11,
    title: 'Unity 3D',
    color: 'bg-blue-100',
    icon: <FaUnity size={70} fill="black" />,
  },
];

const SkillSection: React.FC = () => {
  return (
    <section className="text-gray-200">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="text-center mb-20">
          <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            My Skills
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {skills.map((skill) => (
            <div key={skill.id} className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
              <Fade direction='up'>
              <div className={`pattern-dots-md gray-light ${skill.color}`}>
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                <div className=''>
                    {skill.icon}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl title-font font-medium mb-3">{skill.title}</h2>
                    <p className="leading-relaxed text-sm text-justify">{skill.description}</p>
                  </div>
                </div>
              </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
