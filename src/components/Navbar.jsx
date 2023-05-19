import React from "react";
import { NavLink, useLocation, useMatch } from "react-router-dom";
import linkedinIcon from "../assets/linkedinIcon.png";
import githubIcon from "../assets/githubIcon.png";

const Home = () => {
  const location = useLocation();
  const homeMatch = useMatch("/");
  const linkedin = "https://www.linkedin.com/in/lucasnull/";
  const github = "https://github.com/lucasnull";

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="flex fixed top-0 py-7 max-h-24 w-screen bg-lightgreen justify-between items-center font-comfortaa">
      <div>
        <NavLink exact to="/" className="font-bold text-3xl leading-10 text-center lowercase text-background mx-36">
          Lucas Null
        </NavLink>
      </div>
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
      <div className="flex gap-6 mx-36">
        <a href={linkedin} target="_blank">
          <img src={linkedinIcon} alt="linkedin" />{" "}
        </a>
        <a href={github} target="_blank">
          <img src={githubIcon} alt="github" />
        </a>
      </div>
    </nav>
  );
};

export default Home;
