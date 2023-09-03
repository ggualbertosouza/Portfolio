import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex items-center">
      <p className="flex-1 border-t border-t-secondary text-2xl">Find me:</p>
      <a
        href="https://www.linkedin.com/in/guilhermegsz"
        target="_blank"
        className="border-l border-l-secondary border-t border-t-secondary px-2 p-1 text-2xl hover:border-t hover:border-t-orange "
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/ggualbertosouza"
        target="_blank"
        className="border-l border-l-secondary border-t border-t-secondary px-2 p-1 text-2xl hover:border-t hover:border-t-orange "
      >
        <AiFillGithub />
      </a>
    </footer>
  );
}
