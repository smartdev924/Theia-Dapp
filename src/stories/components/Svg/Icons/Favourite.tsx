import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 17 17" {...props}>
      <path
        d="M0.541992 16.12H16.542V0.12H0.541992V16.12Z"
        fill="url(#pattern_wine)"
      />
      <defs>
        <pattern
          id="pattern_wine"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_935_4454" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_935_4454"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </Svg>
  )
}

export default Icon
