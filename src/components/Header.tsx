import * as React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { SvgComponent } from "../svg/svg";

interface IHeaderProps {}
//framer
const headerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: { type: "spring", duration: 1, delay: 1 },
  },
};

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    
    <motion.header
      className=""
      variants={headerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <nav>
        <div className="max-w-6x1 mx-auto py-2 h-[10vh] flex justify-left items-center header" id="title">
        <SvgComponent className="w-40 h-40 transition duration-500 ease-in-out transform hover:rotate-180 cursor-pointer"/>
          <h1 className="text-6xl">Pokedex Sakjara</h1>
        <SvgComponent className="w-40 h-40 transition duration-500 ease-in-out transform hover:rotate-180 cursor-pointer"/> 
        </div>
      </nav>
      
    </motion.header>
  );
};

export default Header;
