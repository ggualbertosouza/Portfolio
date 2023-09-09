import { useNavigate } from "react-router-dom";

export default function FormSuccess() {
  const navigate = useNavigate();
  const returnPage = () => {
    navigate("/contact");
  };
  return (
    <div className="flex flex-col text-primary gap-2 items-center justify-center text-center">
      <h3 className="text-xl">Thank you!</h3>
      <p className="text-secondary text-md">
        Your message has been accepted. <br />
        You will receive answer really soon!
      </p>
      <button
        className="bg-[#1C2B3A] text-primary rounded p-2 border border-[#1C2B3A] hover:bg-background hover:border-[#1C2B3A]"
        onClick={returnPage}
        //TODO onclick redirecionando para pagina de mensagem
      >
        Send-new-message
      </button>
    </div>
  );
}
