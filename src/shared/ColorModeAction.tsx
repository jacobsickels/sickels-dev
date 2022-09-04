import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import * as React from "react";
import { Icon } from "semantic-ui-react";

const ColorModeAction: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div style={{ position: "absolute", bottom: "2rem", right: "2rem" }}>
      <ActionIcon
        variant="outline"
        color={dark ? "blue" : "yellow"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        sx={{ position: "relative", zIndex: 20 }}
      >
        {dark ? <Icon name="moon" /> : <Icon name="sun" />}
      </ActionIcon>
    </div>
  );
};

export default ColorModeAction;
