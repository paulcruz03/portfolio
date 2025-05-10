export default function About() {
  const paragraphs = [
    "I'm a software engineer passionate about delivering thoughtful, well-designed solutions and applications. I excel at bridging strategic planning with meticulous execution of every feature.",
    "I have experience with a wide range of technologies and enjoy collaborating with teams to build high-quality software that meets user needs. My current goal is to secure a position in an organization that offers both challenge and opportunities for personal growth, while allowing me to contribute meaningfully with my skills and experience.",
    "In my free time, I enjoy playing video games and spending time with family and friends. I also love to travel and explore new places—it's one of the best ways to learn about different cultures and perspectives."
  ]

  return (
    <section id="about" className="pb-16">
        <h3 className="py-5 lg:hidden">About</h3>
        <div className="flex flex-col gap-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-md font-medium leading-normal">
              {paragraph}
            </p>
          ))}
        </div>
    </section>
  )
}
