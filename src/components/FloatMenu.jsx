import React from "react";
import whatsappIcon from "../assets/whatsappIcon.png";
import sendMailIcon from "../assets/sendMailIcon.png";

const FloatingMenuButton = () => {
  return (
    <div className="flex flex-col fixed bottom-24 right-6 gap-3">
      <a className="w-20 h-20  bg-lightgreen rounded-full flex items-center justify-center">
        <img src={whatsappIcon} />
      </a>
      <a className="w-20 h-20 bg-lightgreen rounded-full flex items-center justify-center">
        <img src={sendMailIcon} />
      </a>
    </div>
  );
};

export default FloatingMenuButton;
