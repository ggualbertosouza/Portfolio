// React-simple-typewriter packages
import { useTypewriter } from "react-simple-typewriter";


export default function Dev() {
  const [typeEffect] = useTypewriter({
    words: ["> Front-end", "> Future full-stack"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <>
    <div className="flex flex-col item-center justify-center">
      <h2 className="text-sm md:text-2xl text-purple">
      {typeEffect} developer
      </h2>
    </div>
    </>
  );
}
