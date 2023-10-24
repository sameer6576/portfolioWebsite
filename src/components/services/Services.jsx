import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ReactJs</h2>
          <p>
            React is a popular JavaScript library for building user interfaces
            that allows developers to create dynamic and interactive web
            applications with ease.
          </p>
          <a href="https://www.pngegg.com/en/search?q=html">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HTML & CSS</h2>
          <p>
            HTML and CSS are fundamental web technologies: HTML structures
            content, while CSS styles and designs it, making them essential for
            creating web pages and user interfaces.
          </p>
          <a href="https://www.pngegg.com/en/search?q=html">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>C++</h2>
          <p>
            C++ is a high-performance, multi-paradigm programming language used
            for system-level software and applications.
          </p>
          <a href="https://www.pngegg.com/en/search?q=html">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SQL</h2>
          <p>
            SQL (Structured Query Language) is essential for managing and
            querying relational databases, enabling efficient data storage and
            retrieval in software development.
          </p>
          <a href="https://www.pngegg.com/en/search?q=html">
            <button>Go</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
