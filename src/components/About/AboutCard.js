import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi , I am <span className="purple">Atharva Kalbhor </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I'm currently pursuing a Bachelor of Engineering in Artificial Intelligence and Data Science.
            <br />
            I'm always eager to learn more and contribute to projects that challenge me and allow me to grow professionally.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everything has beauty, but not everyone sees it."{" "}
          </p>
          <footer className="blockquote-footer">Atharva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;