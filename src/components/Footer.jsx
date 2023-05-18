import React from "react";
import { NavLink, useLocation, useMatch } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const homeMatch = useMatch("/");

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <footer className="fixed bottom-0 left-0 w-screen h-16 py-7 bg-lightgreen text-lightorange flex items-center justify-center">
      <p className="mx-56">© Desenvolvido por Lucas Null</p>
      <div>
        <ul className="flex gap-10 text-base leading-4 lowercase text-center text-lightorange">
          <li>
            <NavLink exact to="/" className={`${homeMatch ? "text-darkorange" : ""}`}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre-mim" className={`${isActiveRoute("/sobre-mim") ? "text-darkorange" : ""}`}>
              sobre mim
            </NavLink>
          </li>
          <li>
            <NavLink to="/habilidades" className={`${isActiveRoute("/habilidades") ? "text-darkorange" : ""}`}>
              habilidades
            </NavLink>
          </li>
          <li>
            <NavLink to="/projetos" className={`${isActiveRoute("/projetos") ? "text-darkorange" : ""}`}>
              projetos
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
