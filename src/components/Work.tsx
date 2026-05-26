import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const works = [
  {
    title: "Tic Tac Toe",
    category: "Game Development",
    tools: "HTML, CSS, JavaScript, DOM Manipulation, Game Logic",
    image: "/images/tic-tac-toe.svg",
  },
  {
    title: "Swappy Bird",
    category: "Game Development",
    tools: "HTML, CSS, JavaScript, Canvas, Collision Detection",
    image: "/images/swappy-bird.png",
  },
  {
    title: "College Website",
    category: "Website Development",
    tools: "HTML, CSS, JavaScript, Responsive Design",
    image: "/images/college-website.png",
  },
  {
    title: "Product Selling Website",
    category: "E-commerce Website",
    tools: "HTML, CSS, JavaScript, Product Cards, Contact Flow",
    image: "/images/product-selling-website.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");

      if (!box.length) {
        return;
      }

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = Math.max(
        rect.width * box.length - (rectLeft + parentWidth) + padding,
        0
      );
    }

    setTranslateX();

    if (translateX === 0) {
      return;
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {works.map((work, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{work.title}</h4>
                    <p>{work.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{work.tools}</p>
              </div>
              <WorkImage image={work.image} alt={work.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
