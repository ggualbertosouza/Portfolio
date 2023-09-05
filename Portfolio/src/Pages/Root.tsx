// Pages
import { Outlet } from "react-router-dom";
import Aside from "../Components/Aside/Aside";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";

// React Packages
import { useState } from "react";

// React-icons Packages
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Root() {
  const [sideBar, setSideBar] = useState<boolean>(false);

  return (
    <div className="min-h-screen w-full bg-background font-fira text-secondary flex">
      <aside
        className={`${
          sideBar ? "md:w-[25%]" : "md:w-[5%]"
        } lg:w-[25%] flex flex-col gap-2  duration-700 border-r border-r-secondary `}
      >
        <a
          href="/"
          className="text-xl text-center p-2 w-full border-b border-b-secondary hover:border-b hover:border-b-orange"
        >
        Guilhermegsz
        </a>
        <button
          className="lg:hidden block"
          onClick={() => setSideBar(!sideBar)}
        >
          {sideBar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <Aside />
      </aside>
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
