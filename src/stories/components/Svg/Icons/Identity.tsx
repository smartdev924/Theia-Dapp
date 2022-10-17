import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M21.3337 24.625C21.3337 25.1773 21.7814 25.625 22.3337 25.625C22.8859 25.625 23.3337 25.1773 23.3337 24.625H21.3337ZM17.167 16.875V15.875V16.875ZM6.83366 16.875V15.875V16.875ZM1.66699 22.0417H0.666992H1.66699ZM0.666992 24.625C0.666992 25.1773 1.11471 25.625 1.66699 25.625C2.21928 25.625 2.66699 25.1773 2.66699 24.625H0.666992ZM23.3337 24.625V22.0417H21.3337V24.625H23.3337ZM23.3337 22.0417C23.3337 20.4062 22.684 18.8376 21.5275 17.6812L20.1133 19.0954C20.8947 19.8768 21.3337 20.9366 21.3337 22.0417H23.3337ZM21.5275 17.6812C20.371 16.5247 18.8025 15.875 17.167 15.875V17.875C18.2721 17.875 19.3319 18.314 20.1133 19.0954L21.5275 17.6812ZM17.167 15.875H6.83366V17.875H17.167V15.875ZM6.83366 15.875C5.19816 15.875 3.62964 16.5247 2.47317 17.6812L3.88738 19.0954C4.66878 18.314 5.72859 17.875 6.83366 17.875V15.875ZM2.47317 17.6812C1.31669 18.8377 0.666992 20.4062 0.666992 22.0417H2.66699C2.66699 20.9366 3.10598 19.8768 3.88738 19.0954L2.47317 17.6812ZM0.666992 22.0417V24.625H2.66699V22.0417H0.666992ZM16.167 6.54167C16.167 8.84285 14.3015 10.7083 12.0003 10.7083V12.7083C15.4061 12.7083 18.167 9.94742 18.167 6.54167H16.167ZM12.0003 10.7083C9.69914 10.7083 7.83366 8.84285 7.83366 6.54167H5.83366C5.83366 9.94742 8.59457 12.7083 12.0003 12.7083V10.7083ZM7.83366 6.54167C7.83366 4.24048 9.69914 2.375 12.0003 2.375V0.375C8.59457 0.375 5.83366 3.13591 5.83366 6.54167H7.83366ZM12.0003 2.375C14.3015 2.375 16.167 4.24048 16.167 6.54167H18.167C18.167 3.13591 15.4061 0.375 12.0003 0.375V2.375Z"
        fill="#667085"
      />
    </Svg>
  )
}

export default Icon