// app/page.tsx - Enhanced version with GSAP animations
'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import MetaBalls from '../components/MetaBalls';
import SplitText from "../components/SplitText";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EnhancedPortfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Refs for animations
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    const ctx = gsap.context(() => {
      // Progress bar animation
      gsap.to(progressBarRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3
        }
      });

      // Navigation animation
      gsap.from(navRef.current, {
        y: -100,
        duration: 0.8,
        ease: "power3.out"
      });

      // Hero section animations
      const heroTimeline = gsap.timeline();
      heroTimeline
        .from(".hero-badge", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-description", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-buttons", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-social", { opacity: 0, scale: 0.8, stagger: 0.1, duration: 0.4 }, "-=0.3");

      // Floating cards animation
      gsap.to(".floating-card-1", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(".floating-card-2", {
        y: 20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(".floating-card-3", {
        x: -20,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // About section
      gsap.from(".about-title", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".about-content p", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        }
      });

      // Skills section
      gsap.from(".skills-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".skill-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 70%",
        }
      });

      // Skill tags animation
      document.querySelectorAll(".skill-tag").forEach((tag) => {
        gsap.from(tag, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          scrollTrigger: {
            trigger: tag,
            start: "top 90%",
          }
        });
      });

      // Experience section
      gsap.from(".experience-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".experience-card", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 70%",
        }
      });

      // Projects section
      gsap.from(".projects-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
        }
      });

      // CTA section
      gsap.from(".cta-content", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
        }
      });
    });

    // Scroll event for scroll-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const experiences = [
    {
      span: "August 2025 - Present",
      job: "Freelance Software Developer",
      jobDescription: "Focused on building custom web application, optimizing websites, and delivering quick solutions under tight deadlines.",
      company: "Self-Employed",
      stack: "Full Stack Developer",
      link: "#", // no company link since freelance
      achievements: []
    },
    {
      span: "July 2019 - March 2025",
      job: "Software Engineer",
      jobDescription: "Collaborated with a team of software engineers, designers, and project managers to brainstorm effective solutions based on client needs. Planned, improved, and built each feature implementation according to company standards, leveraging a broad technical background across diverse technologies.",
      company: "White Widget",
      stack: "Full Stack Developer",
      link: "https://whitewidget.com/",
      achievements: []
    },
    {
      span: "June 2017 - July 2019",
      job: "Software Engineer",
      jobDescription: "Contributed as part of a software engineering team focusing on build and maintain web applications. Experienced in a wide range of technologies across full-stack web and cross-platform development. Initiated and implemented new steps in the development process to enhance product quality.",
      company: "Valueline Systems and Solutions Corp",
      stack: "Full Stack Developer",
      link: "https://valueline.com.ph/",
      achievements: []
    }
  ];

  const projects = [
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
  ];

  const skills = {
    programmingLanguages: ["JavaScript", "TypeScript", "Python", "GoLang", "PHP"],
    frameworks: ["React", "NextJS", "VueJS", "Node.js", "WordPress", "PrestaShop", "CSS", "SASS"],
    tools: ["Google Cloud", "AWS", "Docker", "Terraform", "Git", "PostgreSQL", "MySQL", "GraphDB", "Stripe", "PayMongo", "Brankas", "PayMaya", "Mapbox", "Firebase"]
  };

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power3.inOut"
    });
  };

  const handleHover = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      y: -5,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleHoverOut = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleCardHover = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleCardHoverOut = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* Progress bar */}
      <div 
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>

              <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                Hi, I&apos;m Paul Cruz
              </h1>

              <h2 className="hero-subtitle text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
                Full Stack Software Engineer
              </h2>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/paulcruz03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/paulcruz03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:cruzpauljason97@gmail.com"
                  className="hero-social p-3 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Right side */}
            <div className="relative w-full h-96 lg:h-[500px]">
              <MetaBalls
                color="#ffffff"
                cursorBallColor="#ffffff"
                cursorBallSize={1}
                ballCount={20}
                animationSize={30}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={1}
                speed={0.3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Heading */}
            <div className="about-title lg:sticky lg:top-24">
              <SplitText
                text="About Me"
                onLetterAnimationComplete={undefined}
                className="text-4xl md:text-5xl font-bold mb-4 text-slate-200"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <div className="w-20 h-1 bg-blue-600 rounded-full" />
            </div>

            {/* Right side - Content */}
            <div className="about-content space-y-6 text-lg leading-relaxed text-slate-400">
              <p>I&nbsp;m a software engineer passionate about delivering thoughtful, well-designed solutions and applications. I excel at bridging strategic planning with careful execution of every feature.</p>
              <p>I have experience with a wide range of technologies and enjoy collaborating with teams to build high-quality software that meets user needs. My current goal is to secure a position in an organization that offers both challenge and opportunities for personal growth.</p>
              <p>In my free time, I enjoy playing video games and spending time with family and friends. I also love to travel and explore new places—it&nbsp;s one of the best ways to learn about different cultures and perspectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="skills-title text-center mb-16">
            <SplitText
              text="Skills & Technologies"
              onLetterAnimationComplete={undefined}
              className="text-4xl md:text-5xl font-bold mb-4 text-slate-200"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Languages Card */}
            <div
              className="skill-card bg-slate-900/50 backdrop-blur p-8 rounded-2xl border border-slate-800 hover:border-blue-600/50 transition-colors cursor-default"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardHoverOut}
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-4 text-slate-200">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.programmingLanguages.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-tag px-3 py-1 bg-slate-800 rounded-lg text-sm hover:bg-blue-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks Card */}
            <div
              className="skill-card bg-slate-900/50 backdrop-blur p-8 rounded-2xl border border-slate-800 hover:border-blue-600/50 transition-colors cursor-default"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardHoverOut}
            >
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-xl font-semibold mb-4 text-slate-200">
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-tag px-3 py-1 bg-slate-800 rounded-lg text-sm hover:bg-blue-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Card */}
            <div
              className="skill-card bg-slate-900/50 backdrop-blur p-8 rounded-2xl border border-slate-800 hover:border-blue-600/50 transition-colors md:col-span-2 lg:col-span-1 cursor-default"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardHoverOut}
            >
              <div className="text-4xl mb-4">🛠</div>
              <h3 className="text-xl font-semibold mb-4 text-slate-200">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-tag px-3 py-1 bg-slate-800 rounded-lg text-sm hover:bg-blue-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="experience-title text-center mb-16">
            <SplitText
              text="Work Experience"
              onLetterAnimationComplete={undefined}
              className="text-4xl md:text-5xl font-bold mb-4 text-slate-200"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`experience-card relative lg:flex lg:gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-950 z-10" />

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Content card */}
                  <div className="lg:w-1/2">
                    <Link
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div 
                        className="bg-slate-900/50 backdrop-blur p-6 rounded-xl border border-slate-800 hover:border-blue-600/50 transition-all"
                        onMouseEnter={handleCardHover}
                        onMouseLeave={handleCardHoverOut}
                      >
                        <div className="flex items-start justify-between mb-4 gap-4">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                              {exp.company}
                            </h3>
                            <ExternalLink className={`w-4 h-4 opacity-0 transition-opacity ${exp.link !== '#' ? 'group-hover:opacity-100' : ''}`} />
                          </div>
                        </div>

                        <p className="text-sm text-slate-500 mb-2">{exp.span}</p>
                        <p className="text-lg font-semibold mb-3 text-slate-300">{exp.job}</p>
                        <p className="text-slate-400 leading-relaxed mb-4">{exp.jobDescription}</p>

                        {/* <div className="space-y-2">
                          <p className="text-sm font-semibold text-slate-300">Key Achievements:</p>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, j) => (
                              <li key={j} className="text-sm text-slate-400 flex items-start gap-2">
                                <span className="text-blue-400 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div> */}
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="projects-title text-center mb-16">
            <SplitText
              text="Featured Projects"
              onLetterAnimationComplete={undefined}
              className="text-4xl md:text-5xl font-bold mb-4 text-slate-200"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="project-card">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group h-full"
                >
                  <div
                    className="bg-slate-900/50 backdrop-blur rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-600/50 transition-all h-full flex flex-col"
                    onMouseEnter={handleCardHover}
                    onMouseLeave={handleCardHoverOut}
                  >
                    {/* Project image */}
                    <div className="relative h-64 overflow-hidden bg-slate-800">
                      <Image
                        src={project.img}
                        alt={project.project}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors" />
                    </div>

                    {/* Project info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                        {project.project}
                        <ExternalLink className="w-5 h-5" />
                      </h3>

                      <p className="text-slate-400 mb-4 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded-lg border border-slate-700"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* View more projects link */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/paulcruz03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
            >
              View all projects on GitHub
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-center md:text-left">
              © 2025 Paul Cruz. Built with Next.js & GSAP.
            </p>
            
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/paulcruz03/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/paulcruz03/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:cruzpauljason97@gmail.com"
                className="text-slate-500 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-colors z-30"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}