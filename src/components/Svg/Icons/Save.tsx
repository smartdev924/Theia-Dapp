import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 17 22" {...props} fill="none">
      <mask
        id="mask0_2550_25147"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="17"
        height="22"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0.801025H17V21.801H0V0.801025Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_2550_25147)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.32959 2.31206C2.7864 2.31206 1.49634 3.30128 1.49634 5.25454V20.0868C1.49634 20.1815 1.55022 20.2329 1.59512 20.2591C1.64001 20.2873 1.71085 20.3074 1.79266 20.2611L8.16013 16.6548C8.38761 16.5268 8.66598 16.5258 8.89446 16.6558L15.207 20.256C15.2899 20.3044 15.3607 20.2822 15.4056 20.255C15.4505 20.2278 15.5034 20.1765 15.5034 20.0818V5.43888C15.5034 4.66624 15.5034 2.31206 11.6741 2.31206H5.32959ZM1.69489 21.8013C1.40056 21.8013 1.10623 21.7217 0.838841 21.5626C0.313041 21.2533 -0.000244141 20.7003 -0.000244141 20.0868V5.25454C-0.000244141 2.42387 1.94232 0.801025 5.32959 0.801025H11.6741C15.0584 0.801025 17 2.49237 17 5.43888V20.0818C17 20.6963 16.6867 21.2493 16.1599 21.5586C15.6351 21.8688 15.0025 21.8749 14.4717 21.5727L8.5253 18.1809L2.52399 21.5797C2.26459 21.7268 1.98024 21.8013 1.69489 21.8013Z"
          fill={props.fill}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.112 9.09003H4.81067C4.39761 9.09003 4.06238 8.75156 4.06238 8.33452C4.06238 7.91748 4.39761 7.579 4.81067 7.579H12.112C12.5251 7.579 12.8603 7.91748 12.8603 8.33452C12.8603 8.75156 12.5251 9.09003 12.112 9.09003Z"
        fill={props.fill}
      />
    </Svg>
  )
}

export default Icon
