import Dev from "./Dev";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-1 text-primary">
          <small>hi all, im</small>
          <h1 className="text-4xl">GuilhermeGSZ</h1>
          <p>
            <Dev />
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p>// this is one of my personal projects </p>
          <p> // you can also see more on my github</p>
          <p className="text-primary">
            <span className="text-purple">const </span>
            <span className="text-green"> githublink </span>={" "}
            <a
              href="https://github.com/ggualbertosouza"
              className="text-orange"
            >
              'https://github.com/ggualbertosouza'
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
