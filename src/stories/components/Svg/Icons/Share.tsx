import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 22 22" width="22" height="22" fill="none" {...props}>
      <path
        d="M20.1668 1.83337L21.1107 2.16372C21.2376 1.80114 21.1456 1.39791 20.8739 1.12627C20.6023 0.854629 20.1991 0.76261 19.8365 0.889516L20.1668 1.83337ZM13.7502 20.1667L12.8364 20.5728C13.0029 20.9475 13.3812 21.1826 13.7909 21.1659C14.2006 21.1492 14.5586 20.8841 14.694 20.4971L13.7502 20.1667ZM1.8335 8.25004L1.50315 7.30618C1.11615 7.44163 0.851041 7.7996 0.834327 8.20928C0.817613 8.61896 1.05268 8.99733 1.42736 9.16385L1.8335 8.25004ZM19.4597 1.12627L9.37639 11.2096L10.7906 12.6238L20.8739 2.54048L19.4597 1.12627ZM19.223 1.50302L12.8063 19.8364L14.694 20.4971L21.1107 2.16372L19.223 1.50302ZM14.664 19.7606L10.9973 11.5106L9.16968 12.3228L12.8364 20.5728L14.664 19.7606ZM10.4896 11.0029L2.23963 7.33623L1.42736 9.16385L9.67736 12.8305L10.4896 11.0029ZM2.16385 9.1939L20.4972 2.77723L19.8365 0.889516L1.50315 7.30618L2.16385 9.1939Z"
        fill="#667085"
        strokeWidth="1"
      />
    </Svg>
  )
}

export default Icon
