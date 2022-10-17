import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 23 27" {...props}>
      <path
        d="M1.5 22.875H0.75H1.5ZM4.625 19.75V19V19.75ZM21.5 20.5C21.9142 20.5 22.25 20.1642 22.25 19.75C22.25 19.3358 21.9142 19 21.5 19V20.5ZM4.625 1V0.25V1ZM21.5 1H22.25C22.25 0.585786 21.9142 0.25 21.5 0.25V1ZM21.5 26V26.75C21.9142 26.75 22.25 26.4142 22.25 26H21.5ZM1.5 4.125H0.75H1.5ZM2.25 22.875C2.25 22.2451 2.50022 21.641 2.94562 21.1956L1.88496 20.135C1.15826 20.8617 0.75 21.8473 0.75 22.875H2.25ZM2.94562 21.1956C3.39102 20.7502 3.99511 20.5 4.625 20.5V19C3.59729 19 2.61167 19.4083 1.88496 20.135L2.94562 21.1956ZM4.625 20.5H21.5V19H4.625V20.5ZM4.625 1.75H21.5V0.25H4.625V1.75ZM20.75 1V26H22.25V1H20.75ZM21.5 25.25H4.625V26.75H21.5V25.25ZM4.625 25.25C3.99511 25.25 3.39102 24.9998 2.94562 24.5544L1.88496 25.615C2.61167 26.3417 3.59729 26.75 4.625 26.75V25.25ZM2.94562 24.5544C2.50022 24.109 2.25 23.5049 2.25 22.875H0.75C0.75 23.9027 1.15826 24.8883 1.88496 25.615L2.94562 24.5544ZM2.25 22.875V4.125H0.75V22.875H2.25ZM2.25 4.125C2.25 3.49511 2.50022 2.89102 2.94562 2.44562L1.88496 1.38496C1.15826 2.11166 0.75 3.09729 0.75 4.125H2.25ZM2.94562 2.44562C3.39102 2.00022 3.99511 1.75 4.625 1.75V0.25C3.59729 0.25 2.61166 0.658258 1.88496 1.38496L2.94562 2.44562Z"
        fill="#667085"
      />
    </Svg>
  )
}

export default Icon
