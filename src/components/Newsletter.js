import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { mail_receiver } from "./constants";
import { MAIL_KEY } from "../env";
import { ToastContainer, toast } from "react-toastify";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Enviar');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Enviando...')
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
    const body = {
      "sender": {
        "name": "Gabriel Morishita",
        "email": mail_receiver
      },
      "to": [
        {
          "email": email,
          "name": "Pessoa sem nome"
        }
      ],
      "subject": "Você visitou meu site?",
      "htmlContent": "<h1>Olá, eu sou Gabriel Morishita!</h1> Estou aqui devido a um chamado no meu site (https://gabriel-morishita.web.app) que foi enviado com o seu e-mail. Estou disposto para contato!",
    }
    let response = await fetch("https://api.sendinblue.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;",
        "api-key": MAIL_KEY
      },
      body: JSON.stringify(body)
    });
    if (response.status == 201) {
      setEmail('');
      setButtonText("Enviar");
    
      toast.success("E-Mail Enviado!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      toast.error("Oops. Algo deu errado :( Tente novamente mais tarde", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <ToastContainer />
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Quer que eu entre em contato?<br></br> Tudo bem, basta colocar seu endereço e irei te enviar uma mensagem ;)</h3>
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  <button type="submit">{buttonText}</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
