import LogoLoop from "../LogoLoop";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFlask,
  SiMysql,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiFigma,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com/" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiVite />,
    title: "Vite",
    href: "https://vitejs.dev",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  {
    node: <SiFlask />,
    title: "Flask",
    href: "https://flask.palletsprojects.com",
  },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const Techs = () => {
  return (
    <div
      className="
      relative
        h-[180px]
        w-[100%]
        position-relative
        overflow-hidden
        flex
        items-center
        text-[#120620]
        
      "
    >
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={60}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="transparent"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default Techs;
