"use client"

import React, { ReactNode, useState } from 'react';
import { TbHome } from "react-icons/tb";
import { BsPersonVcard } from "react-icons/bs";
import { AiFillTrophy } from "react-icons/ai";
import { SlDocs } from "react-icons/sl";
import { MdArrowForwardIos } from "react-icons/md";
import Link from 'next/link';


const Sidebar = ({children} : {children?: ReactNode}) => {
  const links = [
    {
      id: 'home',
      title: 'Home',
      icon: <TbHome />,
      link: '/',
    },
    {
      id: 'about',
      title: 'About',
      icon: <BsPersonVcard />,
      link: '/about-me',
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: <AiFillTrophy />,
      link: '/skills',
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: <SlDocs />,
      link: '/projects',
    },
  ];

  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const handleSubMenuToggle = (id: string) => {
    setActiveSubMenu((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className='bg-[#1F282C] h-screen text-white px-3'>
    <Link href="/">
    <h1 className='text-center text-4xl py-10 font-bold'> &lt;<span className='text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]'>Portfolio <span className='text-white'>&#47;</span>&gt; </span></h1>
    </Link>
      {links.map((link) => (
        <div key={link.id}>
          <Link href={link.link} prefetch={false}>
          <button
          type='button'
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 w-full text-start flex items-center gap-x-3.5 py-3 px-2.5 hover:translate-x-2 duration-300 transition text-sm rounded-lg hover:text-black hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900  dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={() => handleSubMenuToggle(link.id)}
          >
            {link.icon}
            {link.title}
            {/* <MdArrowForwardIos 
            className={`hs-accordion-active:${activeSubMenu !== link.id ? 'block' : 'hidden'} ms-auto ${
              activeSubMenu !== link.id ? 'w-4 h-4 text-gray-600 group-hover:text-gray-500' : ''
            } dark:text-gray-400`}
             /> */}
          </button>
            </Link>
        </div>
      ))}
      <div>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
