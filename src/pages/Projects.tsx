import { Button } from "@mantine/core";
import * as React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Body } from "../shared/Body";
import { Card } from "../shared/Card";
import { useTextColor } from "../shared/hooks";
import { withPageTitle } from "../shared/PageTitle";
import { H1 } from "../shared/Typography";

const Projects = () => {
  const { link } = useTextColor();

  return (
    <Body noPadding>
      <Link to="/">
        <Button color="gray" leftIcon={<Icon name="arrow left" />}>
          Back
        </Button>
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
              style={{ marginLeft: "0.25rem", color: link }}
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
    </Body>
  );
};

export default withPageTitle("Projects - Jacob Sickels", Projects);
