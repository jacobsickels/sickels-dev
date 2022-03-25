import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import * as React from "react";
import ColorModeAction from "./ColorModeAction";

const ColorModeProvider: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider withNormalizeCSS>
        <ColorModeAction />
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default ColorModeProvider;
