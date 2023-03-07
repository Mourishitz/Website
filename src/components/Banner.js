import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Backend", "de Banco de Dados", "Blockchain", "Frontend" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn max" : ""}>
                <span className="tagline">Olá!</span> 
                <br />
                <span className="tagline">Eu sou Gabriel Morishita</span>
                {
                  window.innerWidth < 800
                    ? <div className="fs-10">Desenvolvedor <span className="txt-rotate" dataPeriod="1000" ><span className="wrap">{text}</span></span></div>
                    : <h1 className="min-h">Desenvolvedor <span className="txt-rotate" dataPeriod="1000" ><span className="wrap">{text}</span></span></h1>
                }
                  <p>
                    Me chamo Gabriel (mas pode me chamar de Morishita). <br />
                    Atualmente estudante de Engenharia da Computação pelo <a href="https://eniac.com.br" target="_blank">Centro Universitário ENIAC</a>.
                    Entusiasta de Ciências da Computação e tecnologia busco sempre aperfeiçoar meus conhecimentos da área.
                  </p>
                  <button onClick={() => console.log('connect')}>Me Conheça! <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
