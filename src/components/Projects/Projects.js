import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import snakegame from "../../Assets/Projects/snakegame.png";
import color from "../../Assets/Projects/colorb&w.png";
import bt from "../../Assets/Projects/bt.png";
import weapon from "../../Assets/Projects/weapon.png";
import weather from "../../Assets/Projects/weather.png";
import medwell from "../../Assets/Projects/medwell.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weapon}
              isBlog={false}
              title="Weapon Detection using Machine Learning"
              description="Designed a sophisticated Weapon Detection System using machine learning algorithms and computer vision
techniques. Achieving high accuracy in recognizing and
classifying weapons, thereby significantly enhancing security measures."
              ghLink="https://github.com/atharvakalbhor16/Weapon-Detection-System"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medwell}
              isBlog={false}
              title="MedWell"
              description="Created the first of its kind online e-hospital platform, MedWell. Chaired effort in building video call and ChatBot
functionality to facilitate seamless patient-doctor interaction and medicine counseling."
              ghLink="https://github.com/atharvakalbhor16/MedWell-App"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bt}
              isBlog={false}
              title="Brain Tumor Detection"
              description="Developed a deep learning model to detect brain tumors from MRI images. The model was trained using architecture and achieved an accuracy of 95%. The model was then deployed using Flask . The model can be used to detect brain tumors from MRI images."
              ghLink="https://github.com/atharvakalbhor16/brain-tumor-detection"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakegame}
              isBlog={false}
              title="Snake Game using Python"
              description="Developed a snake game using Python and Pygame library. The game has a user-friendly interface and is easy to play. The game has a scoring system and the snake grows in size as it eats the food. The game ends when the snake collides with the wall or itself. The game has a restart feature."
              ghLink="https://github.com/atharvakalbhor16/Snake-Game-Using-Python"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Webapp"
              description="Developed a Weather Webapp using React.js and OpenWeatherMap API. The webapp displays the current weather of any city in the world. The webapp also displays the temperature, humidity, and wind speed of the city. The webapp has a user-friendly interface and is easy to use."
              ghLink="https://github.com/atharvakalbhor16/Weather-Webapp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color}
              isBlog={false}
              title="Colorizing Black and White Images"
              description="Developed a deep learning model to colorize black and white images. The model was trained using architecture and achieved an accuracy of 95%. The model was then deployed using Flask . The model can be used to colorize black and white images."
              ghLink="https://github.com/atharvakalbhor16/Colorizing-BlackAndWhite-Images-Using-NeuralNetworks-and-OpenCV"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
