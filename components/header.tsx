'use client';
import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import { BriefcaseBusiness, CircleUserRound, House, Lightbulb, SquareCode } from 'lucide-react';

export default function Header() {
  const [atTop, setAtTop] = useState(true);
  const [isDark] = useState(true);

  useEffect(() => {
    // ignore dark mode for now
    // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("load", handleScroll, { passive: true });

    // if (prefersDark) {
    //   document.documentElement.classList.add("dark");
    //   setIsDark(true);
    // } else {
    //   document.documentElement.classList.remove("dark");
    // }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const menuOptions: { label: string; id: string, icon: JSX.Element }[] = [
    {
      label: "About",
      id: "#about",
      icon: <CircleUserRound />
    },
    {
      label: "Skills",
      id: "#skills",
      icon: <Lightbulb />
    },
    {
      label: "Work",
      id: "#experiences",
      icon: <BriefcaseBusiness />
    },
    {
      label: "Projects",
      id: "#involved-projects",
      icon: <SquareCode />
    }
  ]

  const scroll = (id: string) => {
    const section = document.querySelector( id );
    section?.scrollIntoView( { behavior: 'smooth', block: 'center' } );
  };

  // const toggleTheme = () => {
  //   const nextTheme = !isDark ? "dark" : "light";
  //   setIsDark(!isDark);

  //   if (nextTheme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // };

  return (
    <header className={`
      z-20
      flex justify-between items-center px-4 py-2
      fixed left-1/2 transform -translate-x-1/2
      transition-all duration-500 ease-in-out 
      ${isDark ? "bg-black" : "bg-white"} neutral-border-alpha-medium border-solid border-1 rounded-xl shadow-l 
      ${atTop ? "top-10" : " top-2"}
    `}>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="flex items-center space-x-2">
              <span>
                <House />
              </span>
              <span>
                PJC
              </span>
            </Link>
          </li>

          <li className="border-x neutral-border-alpha-medium"></li>

          {menuOptions.map((option) => (
            <li key={option.label} title={option.label} className={`flex items-center space-x-2 cursor-pointer group hover:text-blue-500`} onClick={() => scroll(option.id)}>
              <span>
                {option.icon}
              </span>
              <span className="hidden lg:block">
                {option.label}
              </span>
            </li>
          ))}

          {/* <li className="border-x neutral-border-alpha-medium"></li>
          
          <button
            onClick={toggleTheme}
            className={`px-2 py-2 rounded-md border ${isDark ? "dark:bg-gray-800 hover:bg-gray-700 text-gray-100" : "bg-gray-100 hover:bg-gray-200 text-gray-800"} transition`}
          >
            {isDark ? <Moon /> : <Sun />}
          </button> */}
        </ul>
      </nav>
    </header>
  )
}