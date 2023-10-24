import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "CryptoStalker",
    img: "/portfolio1.png",
    desc: "A real time cryptocurrency tracker. Uses CoinRanking and BingNewsSearch API to fetch data from RAPID API. Capable of tracking 100 different Cryptocurrency details like price, volume, and trend using chart.js. Tech Stack : ReactJs, Rapid API, Redux Toolkit, HTML, CSS & NodeJs",
    link: "https://cryptostalker-test.netlify.app/",
    sourceCode: "https://github.com/sameer6576/CryptoStalker-Project",
  },
  {
    id: 2,
    title: "React E-commerce Website",
    img: "/portfolio2.png ",
    desc: "A full-fledged E-commerce application using modern web technologies. allowing customers to browse products, add items to the cart, and securely complete transactions. Tech Stack : ReactJs, Strapi, and Stripe(for payment integration)",
    link: "https://samkunstore.netlify.app/",
    sourceCode: "https://github.com/sameer6576/E-commerce-webpage",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <span>

            <a href={item.link} target="_blank" rel="noreferrer">
              <button>See Demo</button>
            </a>
            <a href={item.sourceCode} target="_blank" rel="noreferrer">
              <button>Source Code</button>
            </a>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
