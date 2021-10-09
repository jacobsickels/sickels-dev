import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";
import styled from "styled-components";
import { Card } from "../shared/Card";
import { withPageTitle } from "../shared/PageTitle";
import { H1 } from "../shared/Typography";

const TechnologiesContainer = styled.div`
  margin-bottom: 0.5rem;

  & > .label {
    margin-top: 0.5rem;
  }
`;

const Projects = () => {
  return (
    <Container style={{ marginTop: "4rem" }}>
      <Link to="/">
        <Button content="Back" icon="arrow left" labelPosition="left" />
      </Link>
      <H1>Projects</H1>

      <Card
        title="My Living Dex"
        subtitle={
          <>
            This project was made as a tool for tracking caught pokemon
            throughout the games and all of their forms, also known as a
            <a
              href="https://bulbapedia.bulbagarden.net/wiki/Living_Pok%C3%A9dex"
              style={{ marginLeft: "0.25rem" }}
            >
              living pokedex.
            </a>
          </>
        }
        projectLink="https://pokemon.sickels.dev/"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        technologies={[
          { label: "React", icon: "react" },
          { label: "React Query", icon: "npm" },
          { label: "Semantic UI React", icon: "npm" },
          { label: "Styled Components", icon: "npm" },
          { label: "PokeAPI", icon: "list" },
          { label: "Firebase", icon: "database" },
        ]}
      />
    </Container>
  );
};

export default withPageTitle("Projects - Jacob Sickels", Projects);
