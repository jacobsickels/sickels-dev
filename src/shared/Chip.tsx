import { ChipProps, useMantineColorScheme } from "@mantine/core";
import { Icon } from "semantic-ui-react";

export const Chip: React.FC<ChipProps & { icon?: any; label: string }> = (
  props
) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Chip
      {...props}
      value={props.label}
      color={colorScheme === "dark" ? "gray" : "dark"}
    >
      <Icon name={props.icon} />
      {props.label}
    </Chip>
  );
};
