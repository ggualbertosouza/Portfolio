// React packages
import { ReactNode } from "react";

// Framer Motion Packages
import { motion } from "framer-motion";

type ContactProps = {
  name?: string;
  icon?: ReactNode;
  contact?: string;
  color?: string;
};

export default function Contactitems({
  name,
  color,
  icon,
  contact,
}: ContactProps) {
  return (
    <div className="relative w-full">
      <motion.div
        whileHover={{ x: 1, y: -1 }}
        className="flex items-center gap-2 group px-1"
      >
        <i className={`${color}`}>{icon}</i>
        {name}
        <button className="absolute left-20 p-0.5 bg-purple rounded hidden group-hover:block">
          {contact}
        </button>
      </motion.div>
    </div>
  );
}
