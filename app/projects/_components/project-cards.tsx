"use client"

import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const ProjectCards: React.FC = () => {
    const posts = [
    {
        title: "Random Quote Generator",
        desc: "Random Quote Generator On Single Click - React Js",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "Jan 4 2022",
        href: "/projects"
    },
    {
        title: "Weather App",
        desc: "Real Time Weather Fetch - React Js",
        img: "https://images.unsplash.com/photo-1530563885674-66db50a1af19?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 4 2022",
        href: "/projects"
    },
    {
        title: "E-Commerece",
        desc: "E-Commerece Clothing Website - React Js",
        img: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 4 2022",
        href: "/projects"
    },
    {
        title: "Twitter Clone",
        desc: "Full Stack Twitter CLone - Next Js, Typescript & Tailwind Css",
        img: "https://images.unsplash.com/photo-1596550190729-1d9225e788dd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 4 2022",
        href: "/projects"
    },
    {
        title: "Car Showroom",
        desc: "Advance Car Showroom - Next Js, Typescript & Tailwind css",
        img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 4 2022",
        href: "/projects"
    },
    {
        title: "LMS (Learning Management System)",
        desc: "Full Fuctional LMS - Next Js, Typescript & Tailwind Css",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 4 2022",
        href: "/projects"
    },
    {
        title: "Hadi E-Learning",
        desc: "Frontend of E-Learning Website - Next Js, Typescript & Tailwind Css",
        img: "/asset/hadi.png",
        date: "Jan 4 2022",
        href: "/projects"
    },
]
  return (
    <section className="py-2">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <Fade direction='down'>
            <h1 className="title-font text-center mb-4 text-3xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            My Projects
          </h1>
          </Fade>
          <Fade direction='up'>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <Link href={items.href}>
                                    <img src={items.img} alt={items.title} className="w-full rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <h3 className="text-lg text-white duration-150 group-hover:text-white/70 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-white text-sm duration-150 group-hover:text-white/70">{items.desc}</p>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                </Fade>
            </div>
        </section>
  )
}

export default ProjectCards
