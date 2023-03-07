import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { MAIL_KEY } from "../env";
import { mail_receiver } from "./constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    htmlContent: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    const body = {
      "sender": {
        "name": formDetails.firstName+" "+formDetails.lastName,
        "email": formDetails.email
      },
      "to": [
        {
          "email": mail_receiver,
          "name": "Gabriel Morishita"
        }
      ],
      "subject": formDetails.subject,
      "htmlContent": formDetails.htmlContent + ` (phone: ${formDetails.phone})`,
    };
    
    let response = await fetch("https://api.sendinblue.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;",
        "api-key": MAIL_KEY
      },
      body: JSON.stringify(body)
    });
    setButtonText("Enviar");
    let result = await response.json();
    setFormDetails(formInitialDetails);

    if (response.status == 201) {
      toast.success("E-Mail Enviado!", {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      toast.error("Oops. Algo deu errado :( Tente novamente mais tarde", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  return (
    <section className="contact" id="connect">  
      <ToastContainer />
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Entre em Contato!</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="Nome" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Sobrenome" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="E-Mail" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.subject} placeholder="Assunto" onChange={(e) => onFormUpdate('subject', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Telefone/Celular" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.htmlContent} placeholder="Mensagem" onChange={(e) => onFormUpdate('htmlContent', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
