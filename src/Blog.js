import React from "react";
import "./Blog.css";
import Blog1 from './assets/b1.jpg';
import Blog2 from './assets/b2.jpeg';
import Blog3 from './assets/b3.jpg';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">Redes Sociais</h1>
        <p className="heading p__color">
          As redes sociais que mais utilizo :
        </p>
        <p className="heading p__color">
          GitHub , LinkedIn e Instagram
        </p>
      </div>
      <div className="container">
          <div className="container-projects">
              <div>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">GitHub</h5>
                         <h4 className="project__text">Onde Compartilho meus códigos</h4>
                         <a href="https://github.com/joaopedroalc" className="blog project__btn btn">Veja Mais</a>
                       </div>
                 </div>
              </div>

              <div>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">LinkedIn</h5>
                         <h4 className="project__text">Compartilho experiências</h4>
                         <a href="https://www.linkedin.com/in/joaopedroalcn" className="blog project__btn btn">Veja Mais</a>
                       </div>
                 </div>
              </div>

              <div>
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Instagram</h5>
                         <h4 className="project__text">Posto meus projetos e interajo com a comunidade</h4>
                         <a href="https://www.instagram.com/joaopedrolima.dev" className="blog project__btn btn">Veja Mais</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;
