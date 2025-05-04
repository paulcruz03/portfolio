import Link from "next/link";
import Image from "next/image";

interface Projects {
  project: string;
  description: string;
  link: string;
  img: string;
  stack: {name: string; link ?: string;}[];
}
  
export default function Projects() {
  const projects: Projects[] = [
    {
      project: "Chatbot",
      description: "An AI-powered chatbot that provides instant responses to user queries. It uses Google Gemini for natural language processing and is deployed on Google Cloud.",
      link: "https://github.com/paulcruz03/ai-chatbot",
      img: "/chatbot-vid.gif",
      stack: [
        {name: "Go"},
        {name: "Google Gemini"},
        {name: "Docker"},
        {name: "Google Cloud"},
      ]
    },
    {
      project: "Game Library",
      description: "A web application that allows users to track and compare video games across different platforms.",
      link: "https://github.com/paulcruz03/game-library",
      img: "/game-library.png",
      stack: [
        {name: "NextJS"},
        {name: "REST API"},
        {name: "Supabase"},
        {name: "Vercel"},
        {name: "Shadcn UI"},
      ]
    }
  ]

  const projectTile = (index: number, project: Projects) => {
    return (
      <Link key={index} href={project.link} className="group mb-10 lg:grid grid-cols-4 gap-4 items-center block">
        <div className="col-span-1">
          <Image
            src={project.img}
            alt={project.project}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={500}
            unoptimized
          />
        </div>
        <div className="col-span-3 mt-2 lg:mt-0">
          <p className="text-md font-bold text-blue-600 group-hover:text-blue-400">{project.project}</p>
          <p className="text-md font-medium leading-normal mt-2">{project.description}</p>
          <ul className="flex flex-wrap gap-2 my-2">
            {project.stack.map((stack, index) => (
              <li key={index}>
                <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                  {stack.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    )
  }

  return (
    <section id="involved-projects" className="mb-16">
      <div>
        <h3 className="py-5 lg:hidden">Projects</h3>
        {projects.map((project, index) => projectTile(index, project))}
      </div>
    </section>
  )
}