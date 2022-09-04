import {
  MantineTheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Gradient } from "./Gradient";

const Container = styled.div<{
  colorScheme?: "dark" | "light";
  theme: MantineTheme;
}>`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
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

const gradient: any = new Gradient();

export const Body: React.FC<{ noPadding?: boolean }> = ({
  children,
  noPadding,
}) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      console.log(ref);

      if (colorScheme === "dark") {
        gradient.initGradient("#gradient-canvas-dark");
      } else {
        gradient.initGradient("#gradient-canvas-light");
      }
    }
  }, [ref, colorScheme]);

  return (
    <>
      <canvas
        id={
          colorScheme === "dark"
            ? "gradient-canvas-dark"
            : "gradient-canvas-light"
        }
        data-transition-in
        width="100vh"
      />
      <Container
        colorScheme={colorScheme}
        theme={theme}
        ref={ref as any}
        style={{
          zIndex: 3,
          backgroundColor: "none !important",
          width: "100vw",
          padding: "unset",
        }}
      >
        <Content noPadding={noPadding}>{children}</Content>
      </Container>
    </>
  );
};
