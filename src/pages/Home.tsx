import {
  Button,
  Grid,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import * as React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import { Body } from "../shared/Body";
import { Link } from "../shared/Link";
import { withPageTitle } from "../shared/PageTitle";

const IMG = styled.img`
  width: 30rem;
  height: auto;
  border-radius: 50%;
  padding: 1rem;
  max-width: 30rem;
  float: right;

  @media (max-width: 992px) {
    margin: 0 auto;
    float: none;
  }
`;

const Title = styled.div<{ isDark?: boolean; theme: any }>`
  padding: 1rem;
  color: ${(props) =>
    props.isDark
      ? props.theme.colors.gray[9]
      : props.theme.colors.gray[1]} !important;
  & > h1 {
    font-size: 6rem;
    line-height: 6rem;
  }

  & > p:first-of-type {
    font-size: 6rem;
    margin-bottom: 0rem;
    line-height: 6rem;
  }

  @media (max-width: 768px) {
    & > p:first-of-type {
      font-size: 4rem;
      line-height: 4rem;
    }
  }
`;

const P = styled.p`
  font-size: 2rem;
  line-height: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  & > a {
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & > a {
      width: 100%;
      padding-bottom: 1rem;
    }

    & > button {
      margin-bottom: 1rem;
    }
  }
`;

const Home = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isDark = colorScheme === "dark";

  return (
    <Body>
      <Grid>
        <Grid.Col sm={12} md={5}>
          <IMG src="./img/headshot.jpg" alt="Designer" />
        </Grid.Col>
        <Grid.Col sm={12} md={7}>
          <Title isDark={isDark} theme={theme}>
            <h1>Hello!</h1>
            <p>I'm Jacob Sickels</p>

            <P>a Software Engineer with a passion for UI/UX</P>

            <ButtonContainer>
              <a href="https://www.linkedin.com/in/jacob-sickels-b29368a7/">
                <Button color="linkedin">
                  <Icon name="linkedin" /> LinkedIn
                </Button>
              </a>

              <a href="https://github.com/JacobSickels">
                <Button color="violet">
                  <Icon name="github" /> Github
                </Button>
              </a>

              <Link to="/projects">
                <Button
                  style={{ marginTop: "0rem" }}
                  title="Projects"
                  color="cyan"
                >
                  <Icon name="th" /> Projects
                </Button>
              </Link>
            </ButtonContainer>
          </Title>
        </Grid.Col>
      </Grid>
    </Body>
  );
};

export default withPageTitle("Jacob Sickels", Home);
