import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sameer Ahmed
        </motion.span>
        <div className="social">
          <a
            href="https://github.com/sameer6576"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/sameer-ahmed-a77317118/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" />
          </a>
          <a href="#">
            <img src="/youtube.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
