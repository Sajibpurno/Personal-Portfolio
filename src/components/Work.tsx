import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "WANDERLUST",
    category: "Full-Stack Web Application",
    tools: "React, Next.js, Node.js, Express.js, MongoDB",
    image: "/images/projece1.png",
    link: "https://wander-lust-web.vercel.app/",
  },
  {
    name: "SUNCART",
    category: "E-Commerce Web Application",
    tools: "Next.js, React, Tailwind CSS, MongoDB (database connection)",
    image: "/images/project2.png",
    link: "https://assignment-8-sun-cart.vercel.app/",
  },
  {
    name: "KEEN-KEEPER",
    category: "Frontend Web Application",
    tools: "React, Tailwind CSS, JavaScript",
    image: "/images/project3.png",
    link: "https://assignment-7-keen-keeper-tau.vercel.app/",
  },
  {
    name: "PAYOO",
    category: "Banking Web Application",
    tools: "HTML5, Tailwind CSS, JavaScript",
    image: "/images/project4.png",
    link: "https://sajibpurno.github.io/Payoo-Banking-Application/",
  },
  {
    name: "DigiTool",
    category: "Frontend Web Application",
    tools: "React, Tailwind CSS, JavaScript",
    image: "/images/project5.png",
    link: "https://thunderous-quokka-f83c66.netlify.app/",
  },
  {
    name: "BPL-Dream11",
    category: "Frontend Web Application",
    tools: "React, Tailwind CSS, JavaScript",
    image: "/images/project6.png",
    link: "https://amazing-lollipop-b73dac.netlify.app/",
  },
  {
    name: "GitHub-Issues-Tracker",
    category: "Frontend Web Application",
    tools: "HTML5, Tailwind CSS, JavaScript",
    image: "/images/project7.png",
    link: "https://magnificent-malabi-8a2b24.netlify.app/",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
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
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link || undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
