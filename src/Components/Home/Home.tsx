import Dev from "./Dev";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-0">
      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-1 text-primary">
          <small>hi all, im</small>
          <h1 className="text-md md:text-4xl">GuilhermeGSZ</h1>
          <Dev />
        </div>
        <div className="flex flex-col items-start gap-2 text-[10px] md:text-md lg:text-lg xl:text-2xl">
          <p>// this is one of my personal projects </p>
          <p> // you can also see more on my github</p>
          <p className="text-primary ">
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
