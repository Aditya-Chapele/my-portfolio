import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Aditya Chapele </span>
            from <span className="purple"> Mumbai,Maharashtra, India.</span>
            <br />I'm a 3rd year student, pursuing a B.Tech degree in Computer Science and Engineering with specialization in Iot,Cybersecurity and Blockchain Technology at <a href="https://www.djsce.ac.in/ug-computer-science-engineering-iot-cyber-security-with-block-chain-technology">D.J.Sanghvi</a>.
            <br />
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Riding/Driving
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
