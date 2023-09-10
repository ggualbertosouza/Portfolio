// React Packages
import { ReactNode } from "react";

// Framer motion packages
import { motion } from "framer-motion";

type ItemsProps = {
  name?: string;
  page?: string;
  color?: string;
  icon?: ReactNode;
};

export default function ProfileItems({
  name = "",
  page = "",
  color = "",
  icon = "",
}: ItemsProps) {
  return (
    <motion.a
      whileHover={{ x: 1, y: -1}}
      href={page}
      className="flex items-center gap-2 text-primary "
    >
      <i className={`${color}`}>{icon}</i>
      {name}
    </motion.a>
  );
}
