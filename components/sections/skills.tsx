'use client';
import { JSX } from "react";
import Link from "next/link";

interface Skill {
  name: string;
  percentage?: number;
  shadowClass?: string;
  icon?: JSX.Element;
}

export default function Skills() {
  const programmingLanguages: Skill[] = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "GoLang" },
    { name: "PHP" },
  ];
  
  const librariesAndFrameworks: Skill[] = [
    { name: "React" },
    { name: "NextJS" },
    { name: "VueJS" },
    { name: "Node.js" },
    { name: "WordPress" },
    { name: "PrestaShop" },
    { name: "CSS" },
    { name: "SASS" },
  ];
  
  const toolsAndPlatforms: Skill[] = [
    { name: "Google Cloud" },
    { name: "AWS" },
    { name: "Docker" },
    { name: "Terraform" },
    { name: "Git" },
    { name: "PostgreSQL" },
    { name: "Mysql" },
    { name: "GraphDB" },
    { name: "Stripe" },
    { name: "PayMongo" },
    { name: "Brankas" },
    { name: "PayMaya" },
    { name: "Mapbox" },
    { name: "Firebase" },
  ];

  const renderParagraph = (title: string, skills: Skill[], isGoogleCloudIncluded: boolean = false) => (
    <div className={'mb-6'}>
      <h3 className={'text-lg font-semibold mb-2'}>
        {title}
      </h3>
      <p className={'text-base leading-relaxed'}>
        {isGoogleCloudIncluded && <span>
          <Link className="hover:underline" href="https://www.credly.com/badges/e50ad5fe-ec62-4c5f-ba9d-0a88ad2a1619/public_url">Google Cloud</Link>
          , &nbsp;  
        </span>}
        {skills.filter((skill) => skill.name !== 'Google Cloud').map((skill) => skill.name).join(", ")}.
      </p>
    </div>
  );

  return (
    <section id="skills" className="mb-16">
      <div>
        <h3 className="py-5 lg:hidden">Skills</h3>
        {renderParagraph("🧠 Programming Languages", programmingLanguages)}
        {renderParagraph("🧩 Libraries and Frameworks", librariesAndFrameworks)}
        {renderParagraph("🛠 Tools and Platforms", toolsAndPlatforms, true)}
      </div>
    </section>
  );
}
