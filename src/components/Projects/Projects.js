import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import { ProjectsData } from "../../data";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {ProjectsData.map((project, index) => (
            <Col md={4} key={index} className="project-card">
              <ProjectCard
                imgPath={`/Projects/${project.img}`}
                isBlog={false}
                title={project.title}
                description={project.desc}
                ghLink={project.ghLink}
                demoLink={project.demo}
              />

            </Col>
          ))}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
