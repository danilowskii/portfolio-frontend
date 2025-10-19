import background from "../assets/background.svg";
import dropdown from "../assets/dropdown.png";
import logo from "../assets/logo.svg";
import Button from "../components/Button";

function Index() {
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
        <div className="flex flex-row relative overflow-hidden w-full h-[300px] justify-between">
          <div className="flex flex-col">
            <h1 className="w-[50%] text-[#FD485C] text-6xl mt-[5%] font-sans font-semibold">
              CONSTRUINDO EXPERIÊNCIAS DIGITAIS
            </h1>
          </div>
          <img
            src={logo}
            className="absolute hover:scale-[1.05] hover:rotate-2 transition-all duration-300 -top-30 right-0"
          />
        </div>
        {/*======================================================================*/}
      </div>
    </>
  );
}

export default Index;
