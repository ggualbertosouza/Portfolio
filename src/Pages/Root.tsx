// Pages
import { Outlet } from "react-router-dom";
import Aside from "../Components/Aside/Aside";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

// React Packages
import { useState } from "react";

// React-icons Packages
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Root() {
  const [sideBar, setSideBar] = useState<boolean>(false);

  return (
    <div className="min-h-screen max-w-full bg-background font-fira text-secondary flex">
      <aside
        className={`${
          sideBar ? "w-[60%]" : "w-[13%]"
        } lg:w-[20%] flex flex-col gap-2  duration-700 border-r border-r-secondary relative`}
      >
        <a
          href="/"
          className="block overflow-hidden text-xl text-center py-2 px-0.5 w-full border-b border-b-secondary hover:border-b hover:border-b-orange"
        >
          {sideBar ? "Guilhermegsz" : "Guilhermegsz"}
        </a>
        <button
          className="lg:hidden block text-xl absolute right-2 top-14"
          onClick={() => setSideBar(!sideBar)}
        >
          {sideBar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <nav
          className={`${
            sideBar ? "block" : "sm:hidden lg:block"
          } absolute top-20 w-full`}
        >
          <Aside />
        </nav>
      </aside>
      <div className={`flex flex-col w-full ${sideBar ? "hidden" : ""}`}>
        <div className="lg:block hidden">
          <Header />
        </div>
        <main className="flex-1">
          <Outlet />
        </main>
        <footer>
        <Footer />
        </footer>
      </div>
    </div>
  );
}
