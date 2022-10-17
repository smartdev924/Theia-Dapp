import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 15 13" {...props}>
      <path
        d="M4.7172 12.1883C10.3776 12.1883 13.4736 7.49868 13.4736 3.43188C13.4736 3.29868 13.4736 3.16608 13.4646 3.03408C14.0669 2.59843 14.5868 2.05901 15 1.44108C14.4384 1.69008 13.8425 1.8533 13.2324 1.92528C13.8749 1.54071 14.3557 0.93577 14.5854 0.22308C13.9813 0.581585 13.3204 0.834222 12.6312 0.97008C12.1672 0.476691 11.5535 0.149981 10.8851 0.040508C10.2167 -0.0689651 9.53089 0.0449019 8.93373 0.364488C8.33657 0.684075 7.86139 1.19156 7.58171 1.80842C7.30204 2.42528 7.23346 3.11712 7.3866 3.77688C6.16306 3.7155 4.9661 3.39753 3.87341 2.84358C2.78072 2.28964 1.81673 1.51212 1.044 0.56148C0.650455 1.23898 0.52992 2.041 0.706937 2.80424C0.883954 3.56749 1.34521 4.23458 1.9968 4.66968C1.50702 4.65533 1.0279 4.5232 0.6 4.28448V4.32348C0.600194 5.03401 0.846157 5.7226 1.29617 6.27246C1.74618 6.82232 2.37254 7.19959 3.069 7.34028C2.61593 7.46387 2.14055 7.48193 1.6794 7.39308C1.87613 8.00453 2.25902 8.53923 2.77452 8.92242C3.29003 9.3056 3.91239 9.51813 4.5546 9.53028C3.91652 10.0318 3.18582 10.4026 2.4043 10.6215C1.62277 10.8404 0.805759 10.9031 0 10.8059C1.4074 11.709 3.04495 12.1881 4.7172 12.1859"
        fill={props.fill}
      />
    </Svg>
  )
}

export default Icon
