import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 5.25C1 4.00736 2.00736 3 3.25 3H16.75C17.9926 3 19 4.00736 19 5.25V14.75C19 15.9926 17.9926 17 16.75 17H3.25C2.00736 17 1 15.9926 1 14.75V5.25ZM5.02565 8.12881C5.35663 7.65074 5.7212 7.5 6 7.5C6.2788 7.5 6.64338 7.65074 6.97435 8.12881C7.21012 8.46937 7.67733 8.55432 8.0179 8.31855C8.35846 8.08277 8.44341 7.61556 8.20763 7.275C7.65993 6.48386 6.87285 6 6 6C5.12715 6 4.34007 6.48386 3.79237 7.275C3.24966 8.0589 3 9.04757 3 10C3 10.9524 3.24966 11.9411 3.79237 12.725C4.34007 13.5161 5.12715 14 6 14C6.87285 14 7.65993 13.5161 8.20763 12.725C8.29447 12.5996 8.34099 12.4507 8.34099 12.2981V10C8.34099 9.58579 8.0052 9.25 7.59099 9.25H6.25C5.83579 9.25 5.5 9.58579 5.5 10C5.5 10.4142 5.83579 10.75 6.25 10.75H6.84099V12.0447C6.54806 12.3866 6.24178 12.5 6 12.5C5.7212 12.5 5.35663 12.3493 5.02565 11.8712C4.68968 11.3859 4.5 10.7111 4.5 10C4.5 9.28893 4.68968 8.61411 5.02565 8.12881ZM10.75 6C11.1642 6 11.5 6.33579 11.5 6.75V13.25C11.5 13.6642 11.1642 14 10.75 14C10.3358 14 10 13.6642 10 13.25V6.75C10 6.33579 10.3358 6 10.75 6ZM13.75 6H16.25C16.6642 6 17 6.33579 17 6.75C17 7.16421 16.6642 7.5 16.25 7.5H14.5V9.25L15.25 9.25C15.6642 9.25 16 9.58579 16 10C16 10.4142 15.6642 10.75 15.25 10.75L14.5 10.75V13.25C14.5 13.6642 14.1642 14 13.75 14C13.3358 14 13 13.6642 13 13.25V6.75C13 6.33579 13.3358 6 13.75 6Z"
        fill="#101828"
      />
    </Svg>
  )
}

export default Icon
