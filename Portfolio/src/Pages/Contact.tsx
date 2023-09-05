import ContactCode from "../Components/Codes/ContactCode";
import Form from "../Components/Form/Form";

export default function Contact() {
  return (
    <div
    className="lg:flex gap-2 h-full "
    >
      <div className="lg:w-[50%] lg:border-r lg:border-r-secondary  p-8 pt-24">
      <Form/>
      </div>
      <div className="lg:w-[50%] p-8 pt-24">
      <ContactCode/>
      </div>
    </div>
  );
}
