// React Icons Packages
import { BiDownArrow, BiSolidFolder, BiSolidRightArrow } from "react-icons/bi";

//Framer Motion Packages
import { motion, useCycle } from "framer-motion";

//Pages Imports
import ProfileItems from "./ProfileItems";

// Framer motion Variants
const variants = {
    open: {
        opacity: 1,
        x: 0
    },
    closed: {
        opacity: 0,
        x: -100,

        transition: {
            duration: 1
        }
    }
}

export default function ProfileInfo() {
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <>
      <motion.button
        whileHover={{translateX: 3}}
        onClick={() => setIsOpen()}
        className={`flex items-center gap-2 overflow-hidden`}
      >
        {isOpen ? <BiSolidRightArrow /> : <BiDownArrow />}
        profile-info
      </motion.button>
      <motion.div
        variants={variants}
        animate={!isOpen ? 'open' : 'closed'}
        className={` ${isOpen ? 'hidden' : 'visible'} space-y-2 py-2 pl-6 `}
      >
        <ProfileItems
          name="bio"
          icon={<BiSolidFolder />}
          color="text-orange"
          page="/about"
        />
        <ProfileItems
          name="interests"
          icon={<BiSolidFolder />}
          color="text-purple"
          page="/about/interests"
        />
        <ProfileItems
          name="educational"
          icon={<BiSolidFolder />}
          color="text-green"
          page="/about/educational"
        />
      </motion.div>
    </>
  );
}
