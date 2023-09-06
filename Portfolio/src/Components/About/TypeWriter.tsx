import { useTypewriter } from "react-simple-typewriter";
export default function TypeWriter() {
  const [typeEffect] = useTypewriter({
    words: ["testando", "o teste", "testado"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="flex flex-col item-center justify-center h-full text-center">
      <h2 className="text-2xl purple">
        Estou
        <span className="text-green"> {typeEffect}</span>
      </h2>
    </div>
  );
}
