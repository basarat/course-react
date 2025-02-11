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
const customStyle = {
  ...baseStyle,
  background:
    "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
  color: "#fff",
};

// focus(1:2)
import { ThemeContext } from "./ThemeContext";
import { use } from "react";

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  isCustom?: boolean;
};

export const Button = (props: ButtonProps) => {
  // focus(1:6)
  const { isCustom } = props;
  const style = isCustom
    ? customStyle
    : use(ThemeContext) == "light"
    ? lightStyle
    : darkStyle;

  return (
    <button style={style} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
