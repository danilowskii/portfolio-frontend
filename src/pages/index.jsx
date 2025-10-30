import background from "../assets/background.svg";
import dropdown from "../assets/dropdown.png";
import logo from "../assets/logo.svg";
import TextType from "../components/TextType";
import Button from "../components/Button";
import ContactBox from "../components/ContactBox";
import { useRef, useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import useClickOutside from "../hooks/useClickOutside";
import AboutMe from "../components/AboutMe";
import Techs from "../components/Tech";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

function Index() {
  {
    /*Função para ativar o dropdown para escolher o idioma da página*/
  }
  const [dropDownLanguage, setDropDownLanguage] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setDropDownLanguage(false));

  const changeLanguage = () => {
    setDropDownLanguage((prev) => !prev);
  };

  const [selectedButton, setSelectedButton] = useState("SOBRE");

  const handleSelectButton = (button) => {
    if (selectedButton === button) return;
    console.log("Cliquei no botão: ", button);
    setSelectedButton(button);
  };

  const listButtons = [
    "SOBRE",
    "TECNOLOGIAS",
    "PROJETOS",
    "SERVIÇOS",
    "CONTATO",
  ];

  return (
    <>
      <div className="p-0 m-0 overflow-hidden box-border h-screen w-screen relative">
        {/*Usei overflow-hidden no pai e scale para esconder a borda branca que o blur gera na imagem*/}
        <img
          src={background}
          alt="background-image"
          className="h-screen absolute inset-0 z-10 scale-110 object-cover w-full blur-[5px]"
        />
      </div>
      {/*Container principal com fundo de vidro*/}
      <div className="bg-white/10 px-14 py-10 w-[1080px] backdrop-blur-3xl border-white/40 border h-[90%] my-auto flex flex-col mx-auto absolute inset-0 z-20 rounded-[40px]">
        {/*Cabeçalho com nome e botão de idioma*/}
        <div className="flex flex-row  h-[70px] justify-between w-full border-b border-white">
          <div className="flex flex-col text-[#F9FAF7] text-xl font-serif ">
            <h3 className="">DANILO PAIVA - DESENVOLVEDOR DE SOFTWARE</h3>
            <h3 className="text-[#F9FAF7]">
              FULLSTACK | INTELIGÊNCIA ARTIFICIAL
            </h3>
          </div>
          <div ref={ref} className="relative ">
            <Button
              onClick={() => changeLanguage((prev) => !prev)}
              variant="primary"
            >
              🇧🇷 Português{" "}
              <img
                src={dropdown}
                className={`h-6 rounded-full ${
                  dropDownLanguage
                    ? "rotate-180 transition-transform ease-in-out"
                    : "transition-transform  ease-in-out"
                }`}
              />
            </Button>

            {dropDownLanguage && (
              <div
                className={`absolute font-serif z-50 w-full text-[#F9FAF7] font-normal transition-transform duration-300 ease-in-out text-center rounded-[11px] bg-[#FD485C] mt-2`}
              >
                <p className="hover:bg-[#F9FAF7] hover:text-[#FD485C] cursor-pointer p-2 rounded-t">
                  🇧🇷 Português
                </p>
                <p className="hover:bg-[#F9FAF7] hover:text-[#FD485C] cursor-pointer p-2">
                  🇺🇸 English
                </p>
                <p className="hover:bg-[#F9FAF7] hover:text-[#FD485C] cursor-pointer p-2 rounded-b">
                  🇪🇸 Español
                </p>
              </div>
            )}
          </div>
          {/*======================================================================*/}
        </div>
        {/*Seção de apresentação com text head + logo */}
        <div className="flex flex-row relative overflow-hidden w-full h-[270px] justify-between">
          <div className="flex flex-col">
            <h1 className="w-[50%] text-[#FD485C] leading-[0.9] text-6xl mt-[3%] font-sans font-semibold">
              CONSTRUINDO EXPERIÊNCIAS DIGITAIS
            </h1>

            <TextType
              text={[
                "que geram valor.",
                "que impulsionam negócios.",
                "que unem criatividade e tecnologia.",
                "que entregam resultados.",
                "que elevam marcas.",
                "que fortalecem conexões.",
                "que fazem história.",
                "para cada necessidade.",
                "que refletem inovação.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
          <img
            src={logo}
            className="absolute hover:scale-[1.05] hover:rotate-2 transition-all duration-300 -top-30 right-0"
          />
        </div>
        <div>
          {/*Botões de navegação */}
          <div className="flex  flex-row font-medium font-sans w-full gap-4">
            {listButtons.map((buttonText, index) => (
              <Button
                onClick={() => handleSelectButton(buttonText)}
                variant="secondary"
                key={index}
                className={
                  buttonText === selectedButton
                    ? `py-3 px-6 transition-all duration-300 max-w-[300px] flex gap-4 h-10 items-center text-[#F9FAF7] text-center rounded-[11px] cursor-pointer bg-[#120620] border border-[#FD485C]`
                    : `py-3 px-6 transition-all duration-300 max-w-[300px] flex gap-4 h-10 items-center text-[#F9FAF7] text-center rounded-[11px] cursor-pointer bg-[#120620]/20 hover:bg-[#120620] border-white/50 border`
                }
              >
                {buttonText}
              </Button>
            ))}
          </div>
          <div className="h-[180px] w-full mt-5 flex">
            {selectedButton === "SOBRE" ? (
              <AboutMe />
            ) : selectedButton === "TECNOLOGIAS" ? (
              <Techs />
            ) : selectedButton === "PROJETOS" ? (
              <Projects />
            ) : selectedButton === "SERVIÇOS" ? (
              <Services />
            ) : selectedButton === "CONTATO" ? (
              <Contact />
            ) : null}
          </div>
        </div>
        {/*Seção correspondente a cada botão*/}

        <div className=" max-h-50 flex justify-between mt-10">
          <ContactBox />
          <PersonalInfo />
        </div>
        {/*======================================================================*/}
      </div>
    </>
  );
}

export default Index;
