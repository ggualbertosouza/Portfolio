import { useTypewriter } from "react-simple-typewriter";
export default function TypeWriter() {
  const [typeEffect] = useTypewriter({
    words: [ "Guilherme", "Guilherme Gualberto", "Guilherme Gualberto Souza"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="flex flex-col item-center justify-center h-full text-center">
      <h2 className="text-sm md:text-2xl purple">
        {'> Profile: '}
        <span className="text-green"> {typeEffect}</span>
      </h2>
    </div>
  );
}
