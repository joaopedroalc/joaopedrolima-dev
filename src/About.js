import React from "react";
import "./About.css";
import aboutImg from "./assets/middleimage.jpeg";
import cv from "./assets/joaopedrolima.dev.pdf"

function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2 infos">
            <h1 className="about__heading">Sobre mim</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Sou desenvolvedor Front-end 🚀 de São Lúis do Maranhão. Além disso, estudante de Engenharia da Computação da UFMA. Estou trilhando o caminho da engenharia e contribuindo com a comunidade de desenvolvedores compartilhando meus códigos 🤖❤️
              </p>
              <p className="about__text p__color">
                Atualmente trabalho como Desenvoledor Front-end na Agência Open Brasil 💻
              </p>

              <span className="stacks">Tecnologias/stacks que desenvolvo</span>

              <div>
                <img align="center" className="icons-tec" alt="jp-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                <img align="center" className="icons-tec" alt="jp-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
                <img align="center" className="icons-tec" alt="jp-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                <img align="center" className="icons-tec" alt="jp-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                <img align="center" className="icons-tec" alt="jp-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                <img align="center" className="icons-tec" alt="jp-Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
                <img align="center" className="icons-tec" alt="jp-c" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" />
                <img align="center" className="icons-tec" alt="jp-java" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              </div>
              <div className="about__button d__flex align__items__center justify__content__center">
                <a href={cv}>
                  <button className="about btn pointer">Download Currículo</button>
                </a>
                <a href="mailto:joaopedrolima.dev@gmail.com">
                  <button className="about btn pointer">Contrate-me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
