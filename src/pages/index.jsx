import background from "../assets/background.svg";
import dropdown from "../assets/dropdown.png";
import logo from "../assets/logo.svg";
import TextType from "../components/TextType";
import Button from "../components/Button";
import ContactBox from "../components/ContactBox";
import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";

function Index() {
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

  const cardProjects = [
    { id: "1", title: "Projeto X", details: "IA for something" },
    { id: "2", title: "Projeto Y", details: "Cloud database" },
    { id: "3", title: "Projeto Z", details: "Landing page for M" },
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
      <div className="bg-white/10 px-14 py-10 w-[1080px] backdrop-blur-3xl border-white/40 border-[1px] h-[90%] my-auto flex flex-col mx-auto absolute inset-0 z-20 rounded-[40px]">
        {/*Cabeçalho com nome e botão de idioma*/}
        <div className="flex flex-row  h-[70px] justify-between w-full border-b-[1px] border-white">
          <div className="flex flex-col text-[#F9FAF7] text-xl font-serif ">
            <h3 className="">DANILO PAIVA - DESENVOLVEDOR DE SOFTWARE</h3>
            <h3 className="text-[#F9FAF7]">
              FULLSTACK | INTELIGÊNCIA ARTIFICIAL
            </h3>
          </div>
          <Button variant="primary">
            (BR) Português <img src={dropdown} className="h-6" />
          </Button>
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
                    ? `py-3 px-6 transition-all duration-300 max-w-[300px] flex gap-4 h-[40px] items-center text-[#F9FAF7] text-center rounded-[11px] cursor-pointer bg-[#120620] border-[1px] border-[#FD485C]`
                    : `py-3 px-6 transition-all duration-300 max-w-[300px] flex gap-4 h-[40px] items-center text-[#F9FAF7] text-center rounded-[11px] cursor-pointer bg-[#120620]/20 hover:bg-[#120620] border-white/50 hover:border-[#FD485C] border-[1px]`
                }
              >
                {buttonText}
              </Button>
            ))}
          </div>
          {/*====================================================================*/}
        </div>
        {/*Seção correspondente a cada botão*/}
        <div className="w-full grid grid-cols-3 mt-5 h-[180px]">
          {cardProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#120620]/30 flex flex-col justify-between p-4 border-white/40 border-[1px] hover:bg-[#120620] hover:border-[#FD485C] cursor-pointer h-full w-[230px] rounded-[20px] "
            >
              <div>
                <h2
                  className="font-serif text-lg font-semibold text-[#FD485C]"
                  key={index}
                >
                  {project.title}
                </h2>
                <p className="text-[#F9FAF7] font-serif">{project.details}</p>
              </div>
              <Button variant="primary">Veja mais</Button>
            </div>
          ))}
        </div>
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
