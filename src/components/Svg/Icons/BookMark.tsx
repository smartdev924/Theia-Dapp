import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 20" {...props}>
      <path
        d="M1.77304 19.8513C1.6529 19.9363 1.51121 19.987 1.36362 19.9978C1.21603 20.0086 1.06825 19.9792 0.936584 19.9128C0.80492 19.8464 0.694481 19.7455 0.617445 19.6213C0.540409 19.4972 0.499767 19.3545 0.500001 19.2091V3.42192C0.500001 2.51437 0.866921 1.64399 1.52004 1.00226C2.17316 0.360523 3.05899 0 3.98264 0H12.0184C12.9417 0.000279091 13.8271 0.360781 14.48 1.00226C15.1328 1.64373 15.4997 2.51368 15.5 3.42087V19.2101C15.5 19.3555 15.4593 19.498 15.3821 19.622C15.305 19.746 15.1946 19.8467 15.0629 19.913C14.9313 19.9793 14.7836 20.0087 14.6361 19.9978C14.4886 19.9869 14.347 19.9362 14.227 19.8513L8 15.4492L1.77197 19.8503L1.77304 19.8513ZM13.8926 3.42087C13.8926 2.93219 13.6951 2.46352 13.3434 2.11797C12.9917 1.77242 12.5147 1.57829 12.0174 1.57829H3.98371C3.48636 1.57829 3.00938 1.77242 2.6577 2.11797C2.30602 2.46352 2.10844 2.93219 2.10844 3.42087V17.6687L7.53279 13.8361C7.66952 13.7395 7.8337 13.6875 8.00214 13.6875C8.17058 13.6875 8.33477 13.7395 8.4715 13.8361L13.8937 17.6687V3.42192L13.8926 3.42087Z"
        fill="#667085"
      />
    </Svg>
  );
};

export default Icon;
