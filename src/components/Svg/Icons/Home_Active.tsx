import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 30" {...props} fill={"none"}>
      <desc>Created with Lunacy</desc>
      <g id="home">
        <path
          d="M0 0L28 0L28 26L0 26L0 0Z"
          id="Background"
          fill="none"
          stroke="none"
        />
        <path
          d="M1 0C0.447714 0 0 0.447716 0 1L0 20.375C0 20.9273 0.447715 21.375 1 21.375L10.0417 21.375C10.8042 21.375 11.5354 21.6779 12.0746 22.2171C12.6138 22.7562 12.9167 23.4875 12.9167 24.25L14.9167 24.25C14.9167 23.4875 15.2196 22.7562 15.7587 22.2171C16.2979 21.6779 17.0292 21.375 17.7917 21.375L17.7917 19.375C16.7517 19.375 15.7462 19.7072 14.9167 20.313L14.9167 6.16666C14.9167 5.06161 15.3557 4.0018 16.1371 3.2204C16.9185 2.43899 17.9783 2 19.0833 2L19.0833 0C17.4478 0 15.8793 0.6497 14.7228 1.80617L14.7228 1.80618C14.418 2.11098 14.1484 2.4444 13.9167 2.80012C14.5643 3.79409 14.9167 4.96221 14.9167 6.16666L12.9167 6.16666C12.9167 4.9622 13.2691 3.79409 13.9167 2.80012C13.6849 2.4444 13.4153 2.11098 13.1105 1.80618C11.954 0.6497 10.3855 0 8.75 0L1 0L1 1L2 1L2 2L1 2L1 0ZM2 19.375L2 2L8.75 2C9.85507 2 10.9149 2.43899 11.6963 3.22039C12.4777 4.0018 12.9167 5.0616 12.9167 6.16666L12.9167 6.16668L12.9167 20.313C12.0872 19.7073 11.0816 19.375 10.0417 19.375L2 19.375ZM2 19.375L2 20.375L1 20.375L1 19.375L2 19.375ZM13.9167 21.2919C14.5617 22.1369 14.9167 23.1751 14.9167 24.25L14.9167 20.313C14.7148 20.4604 14.5234 20.624 14.3445 20.8029C14.1903 20.9571 14.0475 21.1205 13.9167 21.2919ZM13.9167 21.2919C13.7858 21.1205 13.643 20.9571 13.4888 20.8029C13.3099 20.624 13.1185 20.4604 12.9167 20.313L12.9167 21.375L12.9167 24.25C12.9167 23.1751 13.2717 22.1369 13.9167 21.2919ZM19.0833 0L26.8333 0C27.3856 0 27.8333 0.447715 27.8333 1L27.8333 20.375C27.8333 20.9273 27.3856 21.375 26.8333 21.375L17.7917 21.375L17.7917 19.375L25.8333 19.375L25.8333 20.375L26.8333 20.375L26.8333 19.375L25.8333 19.375L25.8333 2L26.8333 2L26.8333 1L25.8333 1L25.8333 2L19.0833 2L19.0833 0ZM13.9167 25.25C14.469 25.25 14.9167 24.8023 14.9167 24.25L12.9167 24.25C12.9167 24.8023 13.3644 25.25 13.9167 25.25Z"
          transform="translate(0.0830078 0.375)"
          id="Shape"
          fill="#FFFFFF"
          fillRule="evenodd"
          stroke="none"
        />
      </g>
    </Svg>
  );
};

export default Icon;
