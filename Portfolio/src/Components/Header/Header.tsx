
export default function Header() {

  return (
    <header className="flex items-center">
      <a
        href="/"
        className="text-xl text-center p-2 border-r border-r-secondary border-b border-b-secondary hover:border-b hover:border-b-orange rotate-0 hover:rotate-1 hover:translate-y-1"
      >
        hello
      </a>
      <a
        href="/about"
        className="text-xl text-center p-2 border-r border-r-secondary border-b border-b-secondary hover:border-b hover:border-b-orange rotate-0 hover:rotate-1 hover:translate-y-1"
      >
        about-me
      </a>
      <a
        href="/projects"
        className="text-xl text-center p-2 border-r border-r-secondary border-b border-b-secondary hover:border-b hover:border-b-orange rotate-0 hover:rotate-1 hover:translate-y-1"
      >
        projects
      </a>
      <a
        href="/contact"
        className="flex-1 flex justify-end text-xl p-2 border-b border-b-secondary hover:border-b hover:border-b-orange rotate-0 hover:rotate-1 hover:translate-y-1"
      >
        contact
      </a>
    </header>
  );
}
