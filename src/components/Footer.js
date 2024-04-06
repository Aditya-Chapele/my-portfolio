import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  //AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>Developed by Aditya Chapele</h3>
        </Col>
        <Col md="4" className="footer-copyright">
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Aditya-Chapele/"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aditya-chapele-933b72250/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
