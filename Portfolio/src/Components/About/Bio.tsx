import ContactCode from "../Codes/ContactCode";
import TypeWriter from "./TypeWriter";

export default function Bio() {
  return (
    <div className="py-10 px-4 space-y-10 h-full">
      <div>
        <TypeWriter />
      </div>
      <div className="lg:flex h-full items-center justify-center text-center gap-6">
        <div className="self-start space-y-5">
          <h2 className="text-xl">Quem sou eu?</h2>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            saepe rerum ad, nulla, aut rem impedit tempora ducimus, quisquam
            nemo esse odit corrupti veniam ipsa ea sint quidem doloribus quae.
          </p>
        </div>
        <div className="lg:mt-0 sm:mt-5x">
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
