import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M23.75 16C24.3023 16 24.75 15.5523 24.75 15C24.75 14.4477 24.3023 14 23.75 14V16ZM6.25 15L5.54289 14.2929C5.15237 14.6834 5.15237 15.3166 5.54289 15.7071L6.25 15ZM14.2929 24.4571C14.6834 24.8476 15.3166 24.8476 15.7071 24.4571C16.0976 24.0666 16.0976 23.4334 15.7071 23.0429L14.2929 24.4571ZM15.7071 6.95711C16.0976 6.56658 16.0976 5.93342 15.7071 5.54289C15.3166 5.15237 14.6834 5.15237 14.2929 5.54289L15.7071 6.95711ZM23.75 14H6.25V16H23.75V14ZM15.7071 23.0429L6.95711 14.2929L5.54289 15.7071L14.2929 24.4571L15.7071 23.0429ZM6.95711 15.7071L15.7071 6.95711L14.2929 5.54289L5.54289 14.2929L6.95711 15.7071Z"
        fill="#101828"
      />
    </Svg>
  )
}

export default Icon
