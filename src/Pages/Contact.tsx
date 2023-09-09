import ContactCode from "../Components/Codes/ContactCode";
import Form from "../Components/Form/Form";

export default function Contact() {
  return (
    <div className="xl:flex gap-2 min-h-full max-w-full">
      <div className="xl:w-[50%] xl:border-r xl:border-r-secondary py-12 flex items-center justify-center">
      <Form/>
      </div>

      <div className="xl:w-[50%] border-t border-t-secondary xl:border-0 py-12 flex items-center justify-center">
      <ContactCode/>
      </div>
    </div>
  );
}
