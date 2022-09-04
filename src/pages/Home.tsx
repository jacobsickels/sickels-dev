import {
  Button,
  Grid,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
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
  position: relative;

  @media (max-width: 992px) {
    position: relative; /* where the next element will be automatically positioned */
    display: inline-block; /* causes element width to shrink to fit content */
    left: 50%; /* moves left side of image/element to center of parent element */
    transform: translate(
      -50%
    ); /* centers image/element on "left: 50%" position */
    float: none;
  }
`;

const Title = styled.div<{ isDark?: boolean; theme: any }>`
  position: relative;
  padding: 1rem;
  opacity: 0.75;
  font-weight: 700;
  color: ${(props) => (props.isDark ? "white" : "black")} !important;
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

const H1 = styled.h1<{ isDark?: boolean; theme: any }>`
  font-size: 15rem;
  position: relative;
  color: ${(props) => (props.isDark ? "white" : "black")};
  opacity: 0.75;
  padding: 0;
  margin: 0;
  line-height: 15rem;

  @media (max-width: 768px) {
    font-size: 10rem;
    line-height: 10rem;
  }
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
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isDark = colorScheme === "dark";

  return (
    <Body>
      <Grid>
        <Grid.Col sm={12} md={5}>
          <IMG src="./img/headshot.jpg" alt="Designer" />
        </Grid.Col>
        <Grid.Col sm={12} md={7}>
          <H1 isDark={isDark}>Hello!</H1>
          <Title isDark={isDark} theme={theme}>
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
