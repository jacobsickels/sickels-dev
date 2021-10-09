import React from "react";
import {
  Button,
  Icon,
  Item,
  Label,
  Segment,
  SemanticICONS,
} from "semantic-ui-react";

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
  return (
    <Segment style={{ padding: 0 }}>
      <Item.Group>
        <Item style={{ marginBottom: "0" }}>
          <Item.Image src={image} />
          <Item.Content style={{ padding: "1rem" }}>
            <Item.Header as="a">{title}</Item.Header>
            <Item.Meta>{subtitle}</Item.Meta>
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
                  icon="arrow right"
                  content="Go to Project"
                  labelPosition="right"
                />
              </a>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};
