import React from "react";
import "./Project.css";
import Project1 from './assets/p1.jpg';
import Project2 from './assets/p2.jpg';
import Project3 from './assets/p3.jpg';
import Project4 from './assets/p4.jpg';
import Project5 from './assets/p5.jpg';
import Project6 from './assets/p6.jpg';

function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">Meus projetos recentes</h1>
                <p className="heading p__color">
                    Esses são os projetos profissionais que desenvolvi por completo pela Agência Open Brasil.
                </p>
                <p className="heading p__color">
                    Websites de clínicas médicas e médicos.
                </p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">UDI Oftalmo</h5>
                                <a href="https://www.udioftalmo.com/" className="project__btn">Ver Website</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Dr Arnaldo Ferreira</h5>
                                <a href="https://drarnaldoferreira.com" className="project__btn">Ver Website</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Clínica Dor e Controle</h5>
                                <a href="https://www.dorecontrole.com" className="project__btn">Ver Website</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Medical Saude</h5>
                                <a href="https://www.medicalsaudeslz.com" className="project__btn">Ver Website</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Clínica Somnus</h5>
                                <a href="https://www.clinicasomnus.com.br" className="project__btn">Ver Website</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project6} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Dr Marcelo Carvalho</h5>
                                <a href="https://www.drmarcelocarvalho.com.br" className="project__btn">Ver Website</a>
                            </div>
                        </div>
                    </div>

                    <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                        <a href="https://www.instagram.com/joaopedrolima.dev">
                            <button className="view__more pointer btn">Veja mais</button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;
