import { useMantineColorScheme, useMantineTheme } from "@mantine/core";

export const useTextColor = () => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  if (colorScheme === "dark") {
    return { color: theme.colors.dark[9], link: theme.colors.cyan[7] };
  }

  return { color: theme.colors.gray[1], link: theme.colors.cyan[2] };
};
