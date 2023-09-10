import TypeWriter from "./TypeWriter";

export default function Bio() {
  return (
    <div className="py-10 px-4 h-full">
      <div>
        <TypeWriter />
      </div>
      <div className="flex flex-col h-full items-start justify-center text-center gap-6 px-6">
        <div className="self-start space-y-5">
          <h2 className="md:text-xl text-lg">Quem sou eu?</h2>
          <p className="text-sm md:text-md text-start">
            Sou Guilherme Gualberto Souza, tenho 23 anos, Mineiro UAI.<br />
            <br /> Busco crescer profissionalmente dentro da área da tecnologia, por ser uma paixão desde criança. Possuo força de vontade, coragem e capacidade de aprendizagem necessária para alcançar esse sonho, almejo alcançar o cargo de Desenvolvedor Full-Stack Sênior. Acredito que a realização só depende de mim, por isso, estou disposto a ser minha melhor versão, no âmbito pessoal e profissional, todos os dias.
            </p>
        </div>
        <div className="xl:mt-0 sm:mt-12">
        </div>
      </div>
    </div>
  );
}
