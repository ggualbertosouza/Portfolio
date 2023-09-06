import ContactCode from "../Components/Codes/ContactCode";
import Form from "../Components/Form/Form";

export default function Contact() {
  return (
    <div className="lg:flex gap-2 min-h-full max-w-full">
      <div className="lg:w-[50%] lg:border-r lg:border-r-secondary py-12 flex items-center justify-center">
      <Form/>
      </div>

      <div className="lg:w-[50%] border-t border-t-secondary lg:border-0 py-12 flex items-center justify-center">
      <ContactCode/>
      </div>
    </div>
  );
}
