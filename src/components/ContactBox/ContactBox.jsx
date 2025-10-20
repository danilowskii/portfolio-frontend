import Button from "../Button";
import send from "../../assets/send.svg";

const ContactBox = () => {
  return (
    <div className="bg-[#120620]/20 border-[1px] border-[#FD485C] p-5 justify-between flex-row w-[50%] rounded-[20px] h-full flex gap-6">
      <div className="flex flex-col justify-between gap-6 w-full">
        <input
          className="h-[40px] pl-4 border-[1px] border-[#FD485C] text-[#F9FAF7] placeholder:text-[#F9FAF7]/60 rounded-[20px] bg-[#120620]/20"
          placeholder="Nome"
        />
        <input
          className="h-[40px] pl-4 border-[1px] border-[#FD485C] text-[#F9FAF7] placeholder:text-[#F9FAF7]/60 rounded-[20px] bg-[#120620]/20"
          placeholder="E-mail"
        />
        <Button variant="primary">
          {" "}
          <img src={send} /> Entrar em contato
        </Button>
      </div>
      <textarea
        placeholder="Mensagem"
        className="rounded-[20px] w-2/3 p-4 text-[#F9FAF7] border-[1px] border-[#FD485C] bg-[#120620]/20 placeholder:text-[#F9FAF7]/60 h-full "
      />
    </div>
  );
};

export default ContactBox;
