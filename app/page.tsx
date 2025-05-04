import About from "@/components/sections/about";
import Experience from "@/components/sections/experiences";
import Project from "@/components/sections/projects";
import Skills from "@/components/sections/skills"

export default function Home() {
  return (
    <div className="">
      <About />
      <Skills />
      <Experience />
      <Project data-aos="zoom-out-left" />
    </div>
  );
}
