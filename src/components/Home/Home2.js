import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.jpg";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              Since I was a kid, I have loved programming, mathematics, data analysis and problem solving.
              <br />
              <br />I have quite a knowledge of programming languages including
              <i>
                <b className="purple"> C, Java, Python, C++, JavaScript</b>
              </i>
              , and SQL dialects including
              <i>
                <b className="purple"> SQL Server and MySQL</b>.
              </i>
              <br />
              <br />
              {/* My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">...placeholder </b> and
                also in areas related to{" "}
                <b className="purple">
                  ....placeholder
                </b>
              </i> */}
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> modern Javascript frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i>
            </p>
          </Col>
          {/* <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} id="img-fluid" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Aditya-Chapele"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-chapele-933b72250/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
