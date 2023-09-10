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
          sideBar ? "w-[60%]" : "w-[9%] md:w-[4%]"
        } flex flex-col gap-2 duration-700 border-r border-r-secondary relative`}
      >
        <a
          href="/"
          className="block overflow-hidden text-xl text-center py-2 px-0.5 w-full border-b border-b-secondary hover:border-b hover:border-b-orange"
        >
          {sideBar ? "Guilhermegsz" : "G"}
        </a>
        <button
          className=" block text-xl absolute right-1 top-14 lg:right-2 lg:text-2xl xl:right-3 xl:text-4xl"
          onClick={() => setSideBar(!sideBar)}
        >
          {sideBar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <nav
          className={`${
            sideBar ? "block" : "sm:hidden lg:block"
          } absolute top-20 w-full`}
        >
          <div className={`${sideBar ? 'visible' : 'hidden'} md:visible`}>
          <Aside />
          </div>
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
