import { useState } from "react";

export const useToggleSwitch = () => {
  const [checked, setChecked] = useState(false);
  const toggleSwitch = () => {
    setChecked(!checked);
  };
  return { toggleSwitch, checked };
};
