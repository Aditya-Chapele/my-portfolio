
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className="project-card-view"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <Card.Body>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          {props.isDemo && (
            <Button className="Button" variant="primary" href={props.live} target="_blank">
              <BiLinkExternal /> &nbsp; View Live
            </Button>
          )}
          {props.isCode && (
            <Button className="Button" variant="primary" href={props.code} target="_blank">
              <BiLinkExternal /> &nbsp; View Code
            </Button>
          )}
          {/* <Card.Title>{props.title}</Card.Title> */}
        </Card.Body>
      ) : (
        <>
          <Card.Img variant="top" src={props.imgPath} alt="No Preview Available" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          </Card.Body>
        </>
      )}
    </Card>
  );
}

export default ProjectCards;
