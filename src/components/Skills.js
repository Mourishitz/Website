import meter from "../assets/img/meter.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { skills } from "./constants";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill f" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>
                          Aqui estão todos os meus conhecimentos de tecnologia dos mais básicos aos mais complexos. <br />
                          Alguns estudos foram feitos de forma informal e autodidata, porém todos são fruto de incansáveis horas de estudo e aprendizado.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          {skills.map((item)=>{
                            return (
                            <div className="item">
                              <img src={meter} alt="Image" />
                              <h5>{item.toString()}</h5>
                            </div>
                            )
                          })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
