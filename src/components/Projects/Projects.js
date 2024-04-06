import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import BharatBhramanImg from "../../Assets/BharatBhraman.png";
import IndianTourismImg from "../../Assets/IndianTourism.png";
import FoodWebsiteImg from "../../Assets/FoodWebsite.png";
import HeadPhonesImg from "../../Assets/Headphones.png";
import CaffineHouseImg from "../../Assets/CaffineHouse.png";
import DecentralDocketImg from "../../Assets/DecetralDocket.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Prominent  </strong> Works
        </h1>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BharatBhramanImg}
              title="Bharat Bhraman"
              description="ReactJS & Firebase power responsive cultural heritage website with advanced CSS for seamless device access, promoting digital preservation."
              isDemo={true}
              isCode={true}
              live="https://bharat-bhraman-alpha.vercel.app/"
              code="https://github.com/jatin-pandey01/EliteCoder-Hacksparrow/tree/rishabh"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IndianTourismImg}
              title="Indian Tourism "
              // description="•	Created a Responsive Website to boost Indian tourism, using HTML, CSS, and JS.Applied responsive design for universal accessibility across devices, promoting Indian tourism digitally."
              description="Responsive design for easy access on any device, promoting Indian tourism digitally."
              isDemo={true}
              isCode={true}
              live="https://web-mini-project-nu.vercel.app/"
              code="https://github.com/Aditya-Chapele/Web-Mini-Project/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DecentralDocketImg}
              title="Decentral Docket"
              // description="Developed a React Native app for student collaboration, utilizing React Native, Figma, Solidity, and JavaScript.Integrated advanced web3.0 and IPFS storage for document and NFT security.Implemented user-friendly chatroom group creation and management for seamless communication and file sharing among students."
              description="Secure document sharing and chat features for student teamwork."
              isCode={true}
              live=""
              code="https://github.com/Mihiroar/DecentralDocket"
            />
          </Col>
          {/* <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1> */}
        <h1 style={{ color: "white" }}>
          Some <strong className="purple">Front-end </strong> projects created by me.
        </h1>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodWebsiteImg}
              title="Food Website"
              description="Developed a visually appealing food website, focusing on showcasing an array of culinary delights and menu offerings to entice visitors with a tantalizing visual experience"
              isCode={true}
              live=""
              code="https://github.com/Aditya-Chapele/Food-Website"
   
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HeadPhonesImg}
              title="Product Landing Page-Headphones"
              description=".Designed a captivating landing page dedicated to headphones, leveraging stunning graphics and concise information to captivate potential customers and drive product awareness."
              isCode={true}
              isDemo={true}
              live="https://product-landin-page-head-phones.vercel.app/"
              code="https://github.com/Aditya-Chapele/ProductLandinPage-HeadPhones-"
            />
          </Col>     
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CaffineHouseImg}
              title="Caffine House"
              description="Responsive coffee shop website crafted with HTML, CSS, and JavaScript for seamless browsing across devices."
              isCode={true}
              isDemo={true}
              live="https://caffine-house.vercel.app/"
              code="https://github.com/Aditya-Chapele/Caffine-House"
            />
          </Col>      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
