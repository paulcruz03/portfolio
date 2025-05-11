import { Linkedin, Github, Mail } from "lucide-react"

export default function Left() {
  return (
    <div className="lg:sticky lg:top-0 lg:max-h-screen lg:py-20">
      <h1 className="text-4xl tracking-tighter text-balance font-bold">Paul Cruz</h1>
      <h3 className="text-lg font-medium mt-2">Software engineer</h3>
      <h3 className="text-lg font-medium mt-2">Full stack</h3>
      <p className="text-md font-medium leading-normal mt-2">Passionate web developer.</p>

      <div>
        <ul className="flex mt-20">
          <li>
            <a href="https://www.linkedin.com/in/paulcruz03/" className="inline-flex items-center gap-2 px-2 py-2 hover:bg-slate-800 hover:text-white rounded-2xl text-whiterounded-lg transition">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/paulcruz03/" className="inline-flex items-center gap-2 px-2 py-2 hover:bg-slate-800 hover:text-white rounded-2xl text-whiterounded-lg transition">
              <Github />
            </a>
          </li>
          <li>
            <a href="mailto:cruzpauljason97@gmail.com" className="inline-flex items-center gap-2 px-2 py-2 hover:bg-slate-800 hover:text-white rounded-2xl text-whiterounded-lg transition">
              <Mail />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
