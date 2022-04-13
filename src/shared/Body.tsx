import {
  MantineTheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import styled from "styled-components";

const Container = styled.div<{
  colorScheme?: "dark" | "light";
  theme: MantineTheme;
}>`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.gray[1]
      : props.theme.colors.gray[9]};
`;

const Content = styled.div<{ noPadding?: boolean }>`
  height: 100%;
  padding: 4rem;
  padding-top: ${(props) => (props.noPadding ? "4rem" : "16rem")};
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`;

export const Body: React.FC<{ noPadding?: boolean }> = ({
  children,
  noPadding,
}) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container colorScheme={colorScheme} theme={theme}>
      <Content noPadding={noPadding}>{children}</Content>
    </Container>
  );
};
