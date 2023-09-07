// React icons Packages
import {
  BiDownArrow,
  BiRightArrow,
  BiSolidFolder,
  BiLogoGmail,
  BiPhone,
} from "react-icons/bi";

// React Packages
import { useState } from "react";

export default function ContAside() {
  const [openContact, setOpenContact] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <button
        onClick={() => setOpenProfile(!openProfile)}
        className="flex gap-2 items-center text-primary pl-2 w-full py-2"
      >
        {openProfile ? <BiRightArrow /> : <BiDownArrow />}
        profile-info
      </button>
      <ul
        className={`${
          openProfile ? "hidden" : "block"
        } duration-300 space-y-1 mb-2 text-primary`}
      >
        <li>
          <a href="/about" className="text-sm flex items-center gap-1">
            <BiSolidFolder className="text-orange" />
            bio
          </a>
        </li>
        <li>
          <a
            href="/about/interests"
            className="text-sm flex items-center gap-1"
          >
            <BiSolidFolder className="text-purple" />
            interests
          </a>
        </li>
        <li>
          <a
            href="/about/educational"
            className="text-sm flex items-center gap-1"
          >
            <BiSolidFolder className="text-green" />
            educational
          </a>
        </li>
      </ul>
      <button
        onClick={() => setOpenContact(!openContact)}
        className="flex gap-2 items-center text-primary pl-2 py-2 border-t border-t-secondary w-full"
      >
        {openContact ? <BiRightArrow /> : <BiDownArrow />}
        contacts
      </button>
      <ul
        className={`${
          openContact ? "hidden" : "block"
        } duration-300 mt-1 text-primary space-y-2`}
      >
        <li className="relative">
          <button className="text-sm flex items-center gap-2  w-full group">
            <BiLogoGmail className="text-orange text-xl" />
            Gmail
            <strong className="absolute left-24 bg-purple p-1 rounded hidden group-hover:block">contatoguilhermegsz@gmail.com</strong>
          </button>
        </li>
        <li className="text-sm flex items-center gap-2 relative">
          <BiPhone className="text-purple text-xl" /> 
          33 98419-5210
        </li>
      </ul>
    </div>
  );
}
