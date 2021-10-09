import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { withPageTitle } from "../shared/PageTitle";

const IMG = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  padding: 1rem;
`;

const Title = styled.div`
  padding: 1rem;
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
  return (
    <Container style={{ height: "100vh" }}>
      <Grid
        verticalAlign="middle"
        columns={2}
        stackable={true}
        style={{ height: "75vh" }}
      >
        <Grid.Column mobile={16} tablet={6} computer={6}>
          <IMG src="./img/headshot.jpg" alt="Designer" />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={10} computer={10}>
          <Title>
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
                <Button color="black">
                  <Icon name="github" /> Github
                </Button>
              </a>

              <Link to="/projects">
                <Button
                  style={{ marginTop: "0rem" }}
                  content="Projects"
                  icon="th"
                  labelPosition="right"
                />
              </Link>
            </ButtonContainer>
          </Title>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default withPageTitle("Jacob Sickels", Home);
