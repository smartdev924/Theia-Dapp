import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
        d="M40 6.66663L41.09 4.98974C40.4272 4.55892 39.5728 4.55892 38.91 4.98974L40 6.66663ZM73.3333 28.3333H75.3333C75.3333 27.6563 74.9909 27.0253 74.4233 26.6564L73.3333 28.3333ZM73.3333 51.6666L74.4233 53.3435C74.9909 52.9746 75.3333 52.3436 75.3333 51.6666H73.3333ZM40 73.3333L38.91 75.0102C39.5728 75.441 40.4272 75.441 41.09 75.0102L40 73.3333ZM6.66667 51.6666H4.66667C4.66667 52.3436 5.00911 52.9746 5.57669 53.3435L6.66667 51.6666ZM6.66667 28.3333L5.57669 26.6564C5.00911 27.0253 4.66667 27.6563 4.66667 28.3333H6.66667ZM38.91 8.34351L72.2434 30.0102L74.4233 26.6564L41.09 4.98974L38.91 8.34351ZM71.3333 28.3333V51.6666H75.3333V28.3333H71.3333ZM72.2434 49.9897L38.91 71.6564L41.09 75.0102L74.4233 53.3435L72.2434 49.9897ZM41.09 71.6564L7.75664 49.9897L5.57669 53.3435L38.91 75.0102L41.09 71.6564ZM8.66667 51.6666V28.3333H4.66667V51.6666H8.66667ZM7.75664 30.0102L41.09 8.34351L38.91 4.98974L5.57669 26.6564L7.75664 30.0102ZM42 73.3333V51.6666H38V73.3333H42ZM72.1864 26.6948L38.8531 50.0282L41.1469 53.3051L74.4803 29.9718L72.1864 26.6948ZM41.1469 50.0282L7.81359 26.6948L5.51974 29.9718L38.8531 53.3051L41.1469 50.0282ZM7.81359 53.3051L41.1469 29.9718L38.8531 26.6948L5.51974 50.0282L7.81359 53.3051ZM38.8531 29.9718L72.1864 53.3051L74.4803 50.0282L41.1469 26.6948L38.8531 29.9718ZM38 6.66663V28.3333H42V6.66663H38Z"
        fill="#FCFCFD"
      />
    </Svg>
  );
};

export default Icon;