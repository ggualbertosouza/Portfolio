import ContactCode from "../Components/Codes/ContactCode";
import FormSuccess from "../Components/FormSuccess/FormSuccess";

export default function ContactSuccess() {
  return (
    <div
    className="lg:flex gap-2 min-h-full max-w-full items-center justify-center"
    >
      <div className="lg:w-[50%] lg:border-r lg:border-r-secondary py-24 flex items-center justify-center">
      <FormSuccess />
      </div>
      <div className="lg:w-[50%] border-t border-t-secondary lg:border-0 py-12 flex items-center justify-center">
      <ContactCode/>
      </div>
    </div>
  );
}
