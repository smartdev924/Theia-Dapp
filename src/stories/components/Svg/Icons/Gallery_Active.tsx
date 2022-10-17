import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 35 35" {...props}>
      <desc>Created with Lunacy</desc>
      <g id="gallery" transform="translate(1 1)">
        <path
          d="M0 0L32 0L32 32L0 32L0 0Z"
          id="Background"
          fill="none"
          stroke="none"
        />
        <path
          d="M21.4487 6.85828L21.7414 7.14999L28.8077 7.14999C28.8586 7.14999 28.9075 7.17023 28.9436 7.20632C28.9797 7.24241 29 7.29139 29 7.34249L29 28.8075C29 28.8586 28.9797 28.9076 28.9436 28.9437C28.9075 28.9798 28.8586 29 28.8077 29L0.19231 29C0.14135 29 0.09246 28.9798 0.05638 28.9437C0.0203 28.9076 0 28.8586 0 28.8075L0 7.34249C0 7.29139 0.0203 7.24241 0.05638 7.20632C0.09246 7.17023 0.14136 7.14999 0.19231 7.14999L7.25965 7.14999L7.55255 6.85704L14.3487 0.0598217L14.3487 0.0597917L14.3527 0.0557317L14.3536 0.0548717C14.3898 0.0194917 14.4384 -0.000208378 14.4889 0C14.5398 0.00022161 14.5886 0.0206617 14.6246 0.0568817L14.6245 0.0569017L14.6287 0.0610317L21.4487 6.85828ZM14.5 0.466522L15.2072 1.1738L19.4756 5.44295L21.1824 7.15L7.81763 7.15L9.52443 5.44295L13.7928 1.1738L14.5 0.466522ZM0.384644 28.615L28.6154 28.615L28.6154 7.535L0.384644 7.535L0.384644 28.615ZM7.55947 14.2844C7.81915 14.5441 8.17131 14.69 8.53852 14.69C8.90562 14.69 9.25782 14.5441 9.51752 14.2844C9.77722 14.0247 9.92312 13.6724 9.92312 13.305C9.92312 12.9376 9.77722 12.5853 9.51752 12.3256C9.25782 12.0659 8.90562 11.92 8.53852 11.92C8.17131 11.92 7.81915 12.0659 7.55947 12.3256C7.29978 12.5853 7.15387 12.9376 7.15387 13.305C7.15387 13.6724 7.29978 14.0247 7.55947 14.2844ZM14.9256 24.23L23.6129 24.23L19.2692 15.5414L14.9256 24.23ZM10.9231 20.3114L12.8821 24.23L8.96411 24.23L10.9231 20.3114Z"
          transform="translate(1.5 1.5)"
          id="Shape"
          fill="#FFFFFF"
          fillRule="evenodd"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
      </g>
    </Svg>
  )
}

export default Icon
