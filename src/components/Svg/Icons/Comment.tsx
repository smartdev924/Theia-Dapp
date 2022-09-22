import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 25" {...props} fill="none">
      <path
        d="M5.25 18.301C4.38805 18.301 3.5614 17.9586 2.9519 17.3491C2.34241 16.7396 2 15.913 2 15.051V6.55103C2 5.68907 2.34241 4.86242 2.9519 4.25293C3.5614 3.64344 4.38805 3.30103 5.25 3.30103H18.75C19.1768 3.30103 19.5994 3.38509 19.9937 3.54842C20.388 3.71174 20.7463 3.95114 21.0481 4.25293C21.3499 4.55472 21.5893 4.913 21.7526 5.3073C21.9159 5.70161 22 6.12423 22 6.55103V15.051C22 15.4778 21.9159 15.9004 21.7526 16.2947C21.5893 16.6891 21.3499 17.0473 21.0481 17.3491C20.7463 17.6509 20.388 17.8903 19.9937 18.0536C19.5994 18.217 19.1768 18.301 18.75 18.301H13.012L8 22.051C7.81428 22.19 7.59356 22.2746 7.36251 22.2953C7.13146 22.316 6.89922 22.272 6.69176 22.1682C6.4843 22.0644 6.30981 21.905 6.18782 21.7077C6.06582 21.5104 6.00114 21.283 6.001 21.051V18.301H5.251H5.25ZM12.514 16.801H18.75C19.2141 16.801 19.6592 16.6167 19.9874 16.2885C20.3156 15.9603 20.5 15.5152 20.5 15.051V6.55103C20.5 6.0869 20.3156 5.64178 19.9874 5.31359C19.6592 4.9854 19.2141 4.80103 18.75 4.80103H5.25C4.78587 4.80103 4.34075 4.9854 4.01256 5.31359C3.68437 5.64178 3.5 6.0869 3.5 6.55103V15.051C3.5 16.017 4.284 16.801 5.25 16.801H7.499V20.551L12.514 16.801Z"
        fill={props.fill}
      />
    </Svg>
  );
};

export default Icon;