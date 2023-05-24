import React from "react";
import whatsappIcon from "../assets/whatsappIcon.png";
import sendMailIcon from "../assets/sendMailIcon.png";

const FloatingMenuButton = () => {
  const whatsAppMsg = () => {
    const number = "5519991096104";
    const message = "Olá, vim pelo seu portfólio e gostaria de te conhecer melhor!";
    window.open(`https://api.whatsapp.com/send?phone=${number}&text=${message}`, "_blank");
  };
  return (
    <div className="flex flex-col fixed bottom-24 right-6 gap-3">
      <a className="w-20 h-20  bg-lightgreen rounded-full flex items-center justify-center">
        <button onClick={whatsAppMsg}>
          <img src={whatsappIcon} />
        </button>
      </a>
      <a
        className="w-20 h-20 bg-lightgreen rounded-full flex items-center justify-center"
        href="mailto:lucasnull@live.com"
        target="_blank"
      >
        <img src={sendMailIcon} />
      </a>
    </div>
  );
};

export default FloatingMenuButton;
