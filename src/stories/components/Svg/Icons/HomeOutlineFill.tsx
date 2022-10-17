import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 3.66699L4 12.592V26.617C4 27.2933 4.28095 27.9419 4.78105 28.4201C5.28115 28.8983 5.95942 29.167 6.66667 29.167H12V16.417H20V29.167H25.3333C26.0406 29.167 26.7189 28.8983 27.219 28.4201C27.719 27.9419 28 27.2933 28 26.617V12.592L16 3.66699Z"
        fill="#101828"
      />
      <path
        d="M4 12.592L3.40321 11.7896C3.14952 11.9783 3 12.2758 3 12.592H4ZM16 3.66699L16.5968 2.86459C16.2425 2.60113 15.7575 2.60113 15.4032 2.86459L16 3.66699ZM28 12.592H29C29 12.2758 28.8505 11.9783 28.5968 11.7896L28 12.592ZM4 26.617H3H4ZM12 29.167V30.167C12.5523 30.167 13 29.7193 13 29.167H12ZM12 16.417V15.417C11.4477 15.417 11 15.8647 11 16.417H12ZM20 16.417H21C21 15.8647 20.5523 15.417 20 15.417V16.417ZM20 29.167H19C19 29.7193 19.4477 30.167 20 30.167V29.167ZM4.59679 13.3944L16.5968 4.46939L15.4032 2.86459L3.40321 11.7896L4.59679 13.3944ZM15.4032 4.46939L27.4032 13.3944L28.5968 11.7896L16.5968 2.86459L15.4032 4.46939ZM27 12.592V26.617H29V12.592H27ZM27 26.617C27 27.0133 26.8358 27.4029 26.5278 27.6974L27.9101 29.1429C28.6023 28.4809 29 27.5733 29 26.617H27ZM26.5278 27.6974C26.2184 27.9933 25.7894 28.167 25.3333 28.167V30.167C26.2917 30.167 27.2194 29.8033 27.9101 29.1429L26.5278 27.6974ZM25.3333 28.167H6.66667V30.167H25.3333V28.167ZM6.66667 28.167C6.21057 28.167 5.78165 27.9933 5.47217 27.6974L4.08993 29.1429C4.78064 29.8033 5.70828 30.167 6.66667 30.167V28.167ZM5.47217 27.6974C5.16421 27.4029 5 27.0133 5 26.617H3C3 27.5733 3.39769 28.4809 4.08993 29.1429L5.47217 27.6974ZM5 26.617V12.592H3V26.617H5ZM13 29.167V16.417H11V29.167H13ZM12 17.417H20V15.417H12V17.417ZM19 16.417V29.167H21V16.417H19ZM6.66667 30.167H12V28.167H6.66667V30.167ZM20 30.167H25.3333V28.167H20V30.167Z"
        fill="#101828"
      />
    </Svg>
  )
}

export default Icon