import Switch, { ReactSwitchProps } from "react-switch";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { useTheme } from "styled-components";

export const ThemeSwitch = ({ ...switchProps }: ReactSwitchProps) => {
  const theme = useTheme();
  return (
    <Switch
      {...switchProps}
      offHandleColor={theme.text}
      onHandleColor={theme.text}
      onColor={theme.text}
      offColor={theme.text}
      checkedHandleIcon={
        <MdNightsStay
          size={"1.5rem"}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            padding: "0.1rem",
          }}
          color={theme.darkBlue}
        />
      }
      uncheckedHandleIcon={
        <MdWbSunny
          size={"1.5rem"}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            padding: "0.1rem",
          }}
          color={theme.mustard}
        />
      }
      checkedIcon={false}
      uncheckedIcon={false}
    />
  );
};
