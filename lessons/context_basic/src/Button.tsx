const baseStyle = {
  borderRadius: "5px",
  transition: "all .2s",
};
const lightStyle = {
  ...baseStyle,
  background: "#fff",
  color: "#000",
};
const darkStyle = {
  ...baseStyle,
  background: "#000",
  color: "#fff",
};

// focus(1:1)
import { useTheme } from "./ThemeContext";

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  // focus(1:1)
  const theme = useTheme();
  return (
    <button
      style={theme == "light" ? lightStyle : darkStyle}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
