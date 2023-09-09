import ContactCode from "../Codes/ContactCode";
import TypeWriter from "./TypeWriter";

export default function Bio() {
  return (
    <div className="py-10 px-4 space-y-10 h-full">
      <div>
        <TypeWriter />
      </div>
      <div className="xl:flex h-full items-start justify-center text-center gap-6 px-6">
        <div className="self-start space-y-5">
          <h2 className="text-xl">Quem sou eu?</h2>
          <p className="text-md text-start">
            Sou Guilherme Gualberto Souza, tenho 23 anos, Mineiro UAI.<br />
            <br /> Busco crescer profissionalmente dentro da área da tecnologia, por ser uma paixão desde criança. Possuo força de vontade, coragem e capacidade de aprendizagem necessária para alcançar esse sonho, almejo alcançar o cargo de Desenvolvedor Full-Stack Sênior. Acredito que a realização só depende de mim, por isso, estou disposto a ser minha melhor versão, no âmbito pessoal e profissional, todos os dias.
            </p>
        </div>
        <div className="xl:mt-0 sm:mt-12">
        <ContactCode
          name="Guilherme Gualberto Souza"
          email="contatoguilhermegsz@gmail.com"
          date="01/08/2000"
        />
        </div>
      </div>
    </div>
  );
}
