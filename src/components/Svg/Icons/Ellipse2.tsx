import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 553 449" {...props} fill="none">
      <g opacity="0.4">
        <path
          d="M834.819 134.644C845.363 152.907 845.015 176.428 835.152 203.45C825.291 230.467 805.954 260.875 778.709 292.783C724.224 356.593 638.229 426.27 533.63 486.66C429.031 547.05 325.692 586.686 243.188 601.966C201.933 609.607 165.93 611.15 137.602 606.181C109.269 601.211 88.725 589.752 78.1808 571.489C67.6367 553.226 67.9848 529.705 77.8476 502.683C87.7086 475.666 107.046 445.258 134.291 413.35C188.776 349.54 274.771 279.863 379.37 219.473C483.969 159.083 587.308 119.448 669.812 104.167C711.067 96.5263 747.07 94.9835 775.398 99.9521C803.731 104.922 824.275 116.381 834.819 134.644Z"
          stroke="white"
          stroke-width="1.53842"
        />
        <circle cx="194.887" cy="352.857" r="14.107" fill="white" />
        <path
          d="M599.189 482.507C599.189 533.275 557.733 574.441 506.584 574.441C455.434 574.441 413.978 533.275 413.978 482.507C413.978 431.739 455.434 390.573 506.584 390.573C557.733 390.573 599.189 431.739 599.189 482.507Z"
          fill="white"
          stroke="white"
          stroke-width="1.53842"
        />
        <path
          d="M480.96 183.574C480.96 201.313 466.282 215.721 448.142 215.721C430.002 215.721 415.323 201.313 415.323 183.574C415.323 165.834 430.002 151.426 448.142 151.426C466.282 151.426 480.96 165.834 480.96 183.574Z"
          fill="white"
          stroke="white"
          stroke-width="1.53842"
        />
      </g>
    </Svg>
  );
};

export default Icon;