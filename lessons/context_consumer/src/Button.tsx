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
import { ThemeConsumer } from "./ThemeContext";

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  // focus(1:1)
  /** 
   * ThemeConsumer is designed for class components
   * but 
   *  - it can be used in function components as well
   *  - Note: that we don't recommend class components and ThemeConsumer in new code
   */
  return (
    <ThemeConsumer>
      {(theme) => (
        <button
          style={theme == "light" ? lightStyle : darkStyle}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
    </ThemeConsumer>
  );
};
