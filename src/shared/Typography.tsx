import {
  MantineTheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import styled from "styled-components";

const StyledH1 = styled.h1<{
  colorScheme?: "dark" | "light";
  theme: MantineTheme;
}>`
  font-size: 5rem;
  color: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.gray[9]
      : props.theme.colors.gray[1]};
`;

export const H1: React.FC = ({ children }) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <StyledH1 colorScheme={colorScheme} theme={theme}>
      {children}
    </StyledH1>
  );
};
