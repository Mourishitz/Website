import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { jobs, projects, courses } from "./constants";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export const Projects = () => {

  const no_photo = require("../assets/img/no-photo.png")

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experiências</h2>
                <p>
                  Todos os meus trabalhos, cursos e projetos pessoais fresquinhos.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projetos Pessoais</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experiência Profissional</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cursos e Certificados</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <VerticalTimeline>
                      {jobs.map((job) => {
                        return(
                          <>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={job.date}
                                iconStyle={{ background: '#000000', color: '#fff' }}
                                icon={<img src={job.icon ?? no_photo}/>}
                              >
                                <h3 className="vertical-timeline-element-title">{job.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle mt-2">Empresa: {job.company}</h4>
                                <br />
                                Habilidades:
                                <ul>
                                  {job.stacks.map((item) => {
                                    return(
                                      <li>{item}</li>
                                    )
                                  })}
                                </ul>
                              </VerticalTimelineElement>
                          </>
                        )
                      })}
                    </VerticalTimeline>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <VerticalTimeline>
                      {courses.map((course) => {
                        return(
                          <>
                              <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'linear-gradient(90.21deg, rgba(74, 47, 189, 0.5) -5.91%, rgba(170, 54, 124, 0.5) 111.58% )', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={course.date}
                                iconStyle={{ background: '#000000', color: '#fff' }}
                                icon={<img src={`${course.school.img}`}/>}
                              >
                                <h3 className="vertical-timeline-element-title">{course.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle mt-2">
                                  <a href={course.school.url} target="_blank">{course.school.name}</a> - <a href={course.certificate} target="_blank"> Certificado</a></h4>
                                <br />
                                Habilidades:
                                <ul>
                                  {course.skills.map((item) => {
                                    return(
                                      <li>{item}</li>
                                    )
                                  })}
                                </ul>
                              </VerticalTimelineElement>
                          </>
                        )
                      })}
                    </VerticalTimeline></Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
