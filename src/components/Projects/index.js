import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("All");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {["All", "Full Stack", "Frontend"].map((item, index, arr) => (
            <React.Fragment key={index}>
              <ToggleButton
                value={item}
                onClick={() => setToggle(item)}
                active={toggle === item}
              >
                {item.toUpperCase()}
              </ToggleButton>
              {index !== arr.length - 1 && <Divider key={`divider-${index}`} />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === "All" &&
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}

          {projects
            .filter((project) => project.category === toggle)
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
