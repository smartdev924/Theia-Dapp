import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.77759 5.1909C10.9154 3.76244 13.4288 3 16 3C19.4458 3.00661 22.7486 4.37837 25.1851 6.81491C27.6216 9.25145 28.9934 12.5542 29 16C29 18.5712 28.2376 21.0846 26.8091 23.2224C25.3807 25.3603 23.3503 27.0265 20.9749 28.0104C18.5995 28.9944 15.9856 29.2518 13.4638 28.7502C10.9421 28.2486 8.6257 27.0105 6.80762 25.1924C4.98953 23.3743 3.75141 21.0579 3.2498 18.5362C2.74819 16.0144 3.00563 13.4006 3.98957 11.0251C4.97351 8.64968 6.63975 6.61935 8.77759 5.1909ZM11.068 21.6129C13.4539 20.7362 18.9517 18.716 19.0375 18.5375L22.3375 9.65L13.4625 12.9625C13.284 13.0484 11.2638 18.5462 10.3871 20.932C10.1585 21.5543 10.0076 21.9649 9.98751 22.0125C10.0351 21.9924 10.4457 21.8415 11.068 21.6129Z"
        fill="#101828"
      />
    </Svg>
  )
}

export default Icon
