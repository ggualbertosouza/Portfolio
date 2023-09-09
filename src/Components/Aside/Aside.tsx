// Pages imports
import ContactInfo from "./ContactInfo";
import ProfileInfo from "./ProfileInfo";


export default function Aside() {
  return (
    // TODO usar navlink no aside, para passar de pagina em pagina
    <div className="flex flex-col px-2 text-primary">
      <ProfileInfo />
      <ContactInfo />
    </div>
  );
}
