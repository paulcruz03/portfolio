'use client'

import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Experience {
  span: string;
  job: string;
  jobDescription: string;
  company: string;
  stack: string;
  link: string;
}

export default function Experiences() {
  const experiences: Experience[] = [
    {
      span: "July 2019 - Mar 2025",
      job: "Software Engineer",
      jobDescription: "Collaborated with a team of software engineers, designers, and project managers to brainstorm effective solutions based on client needs. Planned, improved, and built each feature implementation according to company standards, leveraging a broad technical background across diverse technologies.",
      company: "White Widget",
      stack: "Full Stack Developer",
      link: "https://whitewidget.com/",
    },
    {
      span: "June 2017 - July 2019",
      job: "Software Engineer",
      jobDescription: "Contributed as part of a software engineering team focusing on build and maintain web applications. Experienced in a wide range of technologies across full-stack web and cross-platform development. Initiated and implemented new steps in the development process to enhance product quality.",
      company: "Valueline Systems and Solutions Corp",
      stack: "Full Stack Developer",
      link: "https://valueline.com.ph/",
    }
  ]

  const experienceTile = (index: number, experience: Experience) => {
    return (
      <li key={index} className="group pb-10">
        <Link
          href={experience.link}
          rel="noopener noreferrer"
          target="_blank"
          title={experience.company}
          aria-label={experience.company}
          aria-describedby="company"
        >
          <div className="grid grid-cols-[minmax(10px,_1fr)_125px] items-center grid-rows-2 gap-x-4 mb-4">
            <div className="inline-flex items-center gap-1">
              <p className="truncate gap-1 text-blue-600 group-hover:text-blue-400">
                {experience.company}
              </p>
              <ExternalLink className="size-[16] text-blue-600 group-hover:text-blue-400" />
            </div>
            <p className="text-xs row-span-2 font-medium leading-normal mt-2">{experience.span}</p>
            <p className="text-md font-bold">{experience.job}</p>
          </div>
          <p className="text-md font-medium leading-normal mt-2">{experience.jobDescription}</p>
        </Link>
      </li>
    )
  } 

  return (
    <section id="experiences" className="mb-16">
      <div>
        <h3 className="py-5 lg:hidden">Experiences</h3>
        <ul>
          {experiences.map((experience, index) => experienceTile(index, experience))}
        </ul>
      </div>
    </section>
  )
  }
