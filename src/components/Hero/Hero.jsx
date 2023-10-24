import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Home = () => {
  const item = ["Portfolio"]
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SAMEER AHMED</motion.h2>
          <motion.h1 variants={textVariants}>
            React & Software Developer
          </motion.h1>
          <div className="buttons">
            <a href={`#Portfolio`}>
              <motion.button variants={textVariants}>
                See My Latest Works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
            <a href="https://drive.google.com/uc?export=download&id=1Cz8X9CT1pt0cPbjS_I0JGVNo9d8EuBXS">
              <motion.button variants={textVariants}>Download CV</motion.button>
            </a>
          </div>
          <motion.img
            src="/scroll.png"
            variants={textVariants}
            animate="scrollButton"
          ></motion.img>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/port.png" />
      </div>
    </div>
  );
};

export default Home;
