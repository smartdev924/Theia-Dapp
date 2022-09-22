import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 21" {...props} fill="none">
      <path
        d="M11.7049 2.16934L8.24825 2.16101H8.24658C4.60158 2.16101 1.74658 5.01684 1.74658 8.66268C1.74658 12.0777 4.40158 14.6677 7.96742 14.8043V17.9943C7.96742 18.0843 8.00408 18.2327 8.06742 18.3302C8.18575 18.5177 8.38742 18.6193 8.59408 18.6193C8.70908 18.6193 8.82492 18.5877 8.92908 18.521C9.14908 18.381 14.3232 15.071 15.6691 13.9327C17.2541 12.591 18.2024 10.6243 18.2049 8.67268V8.65851C18.1999 5.01934 15.3466 2.16934 11.7049 2.16851V2.16934ZM14.8607 12.9793C13.9157 13.7793 10.8091 15.8168 9.21742 16.8485V14.1927C9.21742 13.8477 8.93825 13.5677 8.59242 13.5677H8.26242C5.21242 13.5677 2.99742 11.5043 2.99742 8.66268C2.99742 5.71768 5.30408 3.41101 8.24742 3.41101L11.7032 3.41934H11.7049C14.6482 3.41934 16.9549 5.72434 16.9566 8.66601C16.9541 10.2577 16.1716 11.8693 14.8616 12.9793H14.8607Z"
        fill={props.fill}
      />
    </Svg>
  );
};

export default Icon;