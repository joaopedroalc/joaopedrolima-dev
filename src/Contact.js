import React from 'react';
import './Contact.css';
import contactImg from "./assets/contact.jpeg"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contate-me.</h1>
                            <p className="hire__text white">Estou disponível para trabalho autônomo. Conecte-se comigo por telefone:</p>
                            <p className="hire__text white"><strong>(98) 98784-0025</strong> ou email <strong>joaopedrolima.dev@gmail.com</strong></p>
                        </div>
                        <form action="https://formsubmit.co/joaopedrolima.dev@gmail.com" method="POST">
                            <div className="input__box">
                                <input type="text" className="contact name" placeholder="Seu nome *" />
                                <input type="text" className="contact email" placeholder="Seu Email *" />
                                <textarea name="message" id="message" placeholder="Escreva sua mensagem"></textarea>
                                <button className="btn contact pointer" type="submit">Enviar</button>
                                <input type="hidden" name="_cc" value="joaopedro.ufma@gmail.com">
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" width={700} height={600} />
                </div>
            </div>
        </div>
    )
}

export default Contact
