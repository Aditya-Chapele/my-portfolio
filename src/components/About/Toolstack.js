import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGithub
} from "react-icons/si";
import {
    DiDatabase,
    DiDocker,
    DiGit,
    DiMysql,
    DiStackoverflow,
    DiTerminal,
    DiUbuntu,
    DiVisualstudio,
    DiWindows,
    DiIntellij
} from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons"> 
            <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiWindows />
        </Col>
      <Col xs={4} md={2} className="tech-icons">   
        <SiLinux />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiTerminal />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiVisualstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiStackoverflow />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDatabase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiIntellij />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiUbuntu />
        </Col>
    </Row>
  );
}

export default Toolstack;
