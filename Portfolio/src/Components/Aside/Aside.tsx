import { Outlet } from "react-router-dom";

export default function Aside() {
  return (
    // TODO usar navlink no aside, para passar de pagina em pagina
    <div className="">
      <Outlet />
    </div>
  );
}
