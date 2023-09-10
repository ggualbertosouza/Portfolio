// React icons Packages
import {
  BiDownArrow,
  BiSolidRightArrow,
  BiLogoGmail,
  BiPhone,
} from "react-icons/bi";

// Framer Motion Packages
import { motion, useCycle } from "framer-motion";

// Page imports
import Contactitems from "./ContactItems";

// Framer motion Variants
const variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: -100,

    transition: {
      duration: 1,
    },
  },
};

export default function ContactInfo() {
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <>
      <motion.button
        whileHover={{ translateX: 3 }}
        onClick={() => setIsOpen()}
        className="flex items-center gap-2"
      >
        {isOpen ? <BiSolidRightArrow /> : <BiDownArrow />}
        contacts
      </motion.button>
      <motion.div
        variants={variants}
        animate={!isOpen ? "open" : "closed"}
        className={` ${isOpen ? "hidden" : "visible"} pl-6 py-2 space-y-2`}
      >
        <Contactitems
          name="gmail"
          color="text-orange"
          icon={<BiLogoGmail />}
          contact="contatoguilhermegsz@gmail.com"
        />
        <Contactitems
          name="phone"
          color="text-purple"
          icon={<BiPhone />}
          contact="33 98419-5210"
        />
      </motion.div>
    </>
  );
}
