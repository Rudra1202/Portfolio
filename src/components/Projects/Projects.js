import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import keeper from "../../Assets/Projects/2.png";
import Gfs from "../../Assets/Projects/1.png";
import weather from "../../Assets/Projects/3.png";

function Projects() {
  return (
    <>
    <Container fluid style={{marginTop:"5rem"}}>
    
      <Container>
        <center><h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1></center>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gfs}
              isBlog={false}
              title="GreenFarming-Site"
              description="MERN E-Commerce Administrator || Payment Integration. Highly skilled E-Commerce Administrator with expertise in MERN (MongoDB, Express.js, React.js, Node.js) technology stack. Proficient in managing an online platform for organic farming product sales, with a focus on order processing, payments, product listings, and statistical analysis. Ensures seamless user experiences and exceptional customer support. Specializes in payment integration for secure and smooth transactions. Detail-oriented and committed to maintaining a user-friendly environment."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-Application"
              description="Weather Application Developer || API Integration Specialist. Experienced developer proficient in OpenWeather API integration to deliver live temperature and future weather forecasts. Skilled in creating intuitive interfaces for effortless user access. Detail-oriented and committed to ensuring accurate and up-to-date weather information"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="KeeperNotes"
              description="Keeper Notes Application. Experienced developer proficient in React JS, specializing in creating Keeper Notes applications. Developed a user  friendly platform allowing users to add and delete notes seamlessly. Demonstrates expertise in building efficient and intuitive interfaces for effective note-taking and management."
            />
          </Col>

        </Row>
      </Container>
      </Container>
      </>

  )
}

export default Projects;
