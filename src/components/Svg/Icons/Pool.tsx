import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M15.9525 7.85714C16.584 7.85714 17.1896 8.08291 17.6361 8.48477C18.0826 8.88663 18.3335 9.43168 18.3335 10C18.3335 10.5683 18.0826 11.1134 17.6361 11.5152C17.1896 11.9171 16.584 12.1429 15.9525 12.1429H4.04778C3.41631 12.1429 2.81071 11.9171 2.36419 11.5152C1.91768 11.1134 1.66683 10.5683 1.66683 10C1.66683 9.43168 1.91768 8.88663 2.36419 8.48477C2.81071 8.08291 3.41631 7.85714 4.04778 7.85714L15.9525 7.85714ZM8.80969 2.5C9.44115 2.5 10.0468 2.72576 10.4933 3.12763C10.9398 3.52949 11.1906 4.07454 11.1906 4.64286C11.1906 5.21118 10.9398 5.75622 10.4933 6.15809C10.0468 6.55995 9.44115 6.78571 8.80969 6.78571H4.04778C3.41631 6.78571 2.81071 6.55995 2.36419 6.15809C1.91768 5.75622 1.66683 5.21118 1.66683 4.64286C1.66683 4.07454 1.91768 3.52949 2.36419 3.12763C2.81071 2.72576 3.41631 2.5 4.04778 2.5L8.80969 2.5ZM11.1906 13.2143C11.8221 13.2143 12.4277 13.4401 12.8742 13.8419C13.3207 14.2438 13.5716 14.7888 13.5716 15.3571C13.5716 15.9255 13.3207 16.4705 12.8742 16.8724C12.4277 17.2742 11.8221 17.5 11.1906 17.5H4.04778C3.41631 17.5 2.81071 17.2742 2.36419 16.8724C1.91768 16.4705 1.66683 15.9255 1.66683 15.3571C1.66683 14.7888 1.91768 14.2438 2.36419 13.8419C2.81071 13.4401 3.41631 13.2143 4.04778 13.2143H11.1906Z"
        fill="#101828"
      />
    </Svg>
  )
}

export default Icon
