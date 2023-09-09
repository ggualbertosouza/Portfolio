import TypeWriter from "./TypeWriter";

export default function Interests() {
  return (
    <div className="py-12 px-4 space-y-12">
      <div className="h-4">
        <TypeWriter />
      </div>
      <div className="flex flex-col h-full items-start justify-center text-center gap-6 px-12">
        <h2 className="text-xl text-green">Interests</h2>
        <p className="text-start">
          Atualmente estou me especializando no front end, mais especificamente em tecnologias como
          TypeScript, React, NextJS, HTML5, Css, Tailwindcss, BootStrap. Também, em como melhorar meu 
          código dentro dessas stacks, estudando Design Patterns, Requisições em API REST e GraphQL,... <br />

          <br />Pretendo adquirir experiência nessa área antes de me aventurar profundamente no back end, possuo alguns
          projetos em Python, Django, MySQL, PostGreSQl, MongoDB. Almejo ser desevolver Full stack, capaz de 
          criar aplicações por completo, desde a ideia até o deploy. Além disso, inteligência artificial e suas 
          aplicaçoes tem sido um tópico que tenho bastante interesse, pois acredito que possa ser algo que esteja
          presente em grande parte do total de aplicações em futuro próximo. 

        </p>
      </div>
    </div>
  );
}
