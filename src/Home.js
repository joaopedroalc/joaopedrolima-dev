import React, {useState} from "react";
import "./Home.css";
import logo from './assets/pc.webp';
import perfil from "./assets/perfil.jpg";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Início</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">Sobre</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Habilidades</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Projetos</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contatos</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#Home">Início</a>
            </li>
            <li className="sideNavbar">
              <a href="#About">Sobre</a>
            </li>
            <li className="sideNavbar">
              <a href="#Services">Habilidades</a>
            </li>
            <li className="sideNavbar">
              <a href="#Portfolio">Projetos</a>
            </li>
            <li className="sideNavbar">
              <a href="#Blog">Blog</a>
            </li>
            <li className="sideNavbar">
              <a href="#Contact">Contatos</a>
            </li>
              </ul>
          </div>
           ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">BEM-VINDO AO MEU MUNDO</h1>
              <h2 className="home__text pz__10">Olá, Eu sou João Pedro Lima</h2>
              <h3 className="home__text black pz__10">Frontend Developer.</h3>
              <h4 className="home__text pz__10">São Luís - Maranhão.</h4>
            </div>
          </div>

          <div className="perfil-container">
            <img src={perfil} alt="perfil" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
