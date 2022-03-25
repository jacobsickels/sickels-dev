import { Button, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import React from "react";
import { Icon, Item, Label, Segment, SemanticICONS } from "semantic-ui-react";
import { useTextColor } from "./hooks";

interface CardProps {
  title: string;
  subtitle: React.ReactNode;
  image: string;
  projectLink: string;
  technologies?: Array<{ label: string; icon: SemanticICONS }>;
}

export const Card = ({
  title,
  subtitle,
  image,
  projectLink,
  technologies,
}: CardProps) => {
  const { colorScheme } = useMantineColorScheme();

  const theme = useMantineTheme();
  const { color } = useTextColor();

  return (
    <Segment
      style={{
        backgroundColor:
          colorScheme === "dark" ? "white" : theme.colors.dark[4],
      }}
    >
      <Item.Group>
        <Item style={{ marginBottom: "0" }}>
          <Item.Image src={image} />
          <Item.Content style={{ padding: "1rem" }}>
            <Item.Header as="a" style={{ color }}>
              {title}
            </Item.Header>
            <Item.Meta style={{ color }}>{subtitle}</Item.Meta>
            <Item.Extra>
              {technologies?.map((technology) => (
                <Label>
                  <Icon name={technology.icon} />
                  {technology.label}
                </Label>
              ))}
            </Item.Extra>
            <Item.Extra>
              <a href={projectLink}>
                <Button
                  style={{
                    float: "right",
                    marginRight: "1rem",
                    marginBottom: "1rem",
                  }}
                  rightIcon={<Icon name="arrow right" />}
                  color="cyan"
                >
                  Go to Project
                </Button>
              </a>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};
