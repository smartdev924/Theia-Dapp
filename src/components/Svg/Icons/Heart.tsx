import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 17 16" {...props}>
      <path
        d="M14.3933 3.07333C14.0528 2.73267 13.6485 2.46243 13.2036 2.27805C12.7586 2.09368 12.2817 1.99878 11.8 1.99878C11.3183 1.99878 10.8414 2.09368 10.3964 2.27805C9.95146 2.46243 9.54717 2.73267 9.20667 3.07333L8.5 3.78L7.79333 3.07333C7.10554 2.38553 6.17269 1.99914 5.2 1.99914C4.22731 1.99914 3.29446 2.38553 2.60666 3.07333C1.91887 3.76112 1.53247 4.69397 1.53247 5.66666C1.53247 6.63935 1.91887 7.5722 2.60666 8.26L3.31333 8.96666L8.5 14.1533L13.6867 8.96666L14.3933 8.26C14.734 7.91949 15.0042 7.51521 15.1886 7.07023C15.373 6.62526 15.4679 6.14832 15.4679 5.66666C15.4679 5.185 15.373 4.70807 15.1886 4.26309C15.0042 3.81812 14.734 3.41383 14.3933 3.07333V3.07333Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={props.fill}
      />
    </Svg>
  );
};

export default Icon;
