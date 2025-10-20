import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import me from "../../assets/me.svg";
import download from "../../assets/download.svg";
import Button from "../Button";

const PersonalInfo = () => {
  return (
    <div className="w-1/2 h-full relative flex flex-row justify-around px-6">
      <div className="flex flex-col gap-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex hover:brightness-0 hover:invert transition-all duration-300 flex-row gap-3 items-center font-medium font-serif"
          href="https://www.linkedin.com/in/paivadanilo/"
        >
          {" "}
          <img src={linkedin} />
          LinkedIn
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="flex hover:brightness-0 hover:invert transition-all duration-300 flex-row gap-3 items-center font-medium font-serif"
          href="https://github.com/danilowskii"
        >
          {" "}
          <img
            className="transition-all duration-300 hover:brightness-0 hover:invert"
            src={github}
          />
          Github
        </a>
      </div>
      <div className="h-full border-1 hover:scale-105 transition-all duration-300 border-white/40 shadow-[0_0_80px_rgba(253,72,92,0.3)] w-1/2 rounded-full overflow-hidden">
        <img className="scale-110" src={me} />
      </div>
      <div className="absolute shadow-lg bottom-0 right-1/2">
        <Button variant="primary">
          {" "}
          <img src={download} />
          Ver Currículo
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
