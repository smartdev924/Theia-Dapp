import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path
        d="M12.2 5.72675L12.8066 5.12675C12.9322 5.00121 13.0027 4.83095 13.0027 4.65341C13.0027 4.47588 12.9322 4.30562 12.8066 4.18008C12.6811 4.05455 12.5108 3.98402 12.3333 3.98402C12.1558 3.98402 11.9855 4.05455 11.86 4.18008L11.26 4.78675C10.3257 4.06398 9.17787 3.67184 7.99664 3.67184C6.81542 3.67184 5.66761 4.06398 4.73331 4.78675L4.12664 4.17341C4.00022 4.04788 3.82911 3.9777 3.65095 3.97833C3.47279 3.97896 3.30218 4.05033 3.17664 4.17675C3.05111 4.30317 2.98093 4.47428 2.98156 4.65244C2.98218 4.8306 3.05356 5.00121 3.17998 5.12675L3.79331 5.73341C3.06199 6.66511 2.66517 7.81564 2.66664 9.00008C2.66447 9.85036 2.86562 10.6888 3.25333 11.4456C3.64103 12.2023 4.20406 12.8554 4.89544 13.3504C5.58682 13.8453 6.38652 14.1678 7.22785 14.2909C8.06918 14.414 8.92774 14.3341 9.73194 14.058C10.5361 13.7819 11.2627 13.3175 11.8509 12.7035C12.4392 12.0896 12.8721 11.3439 13.1136 10.5286C13.3551 9.71333 13.3982 8.85214 13.2393 8.01684C13.0804 7.18154 12.724 6.39635 12.2 5.72675ZM7.99998 13.0001C7.20885 13.0001 6.43549 12.7655 5.7777 12.326C5.1199 11.8864 4.60721 11.2617 4.30446 10.5308C4.00171 9.79991 3.92249 8.99564 4.07684 8.21972C4.23118 7.4438 4.61214 6.73106 5.17155 6.17165C5.73096 5.61224 6.44369 5.23128 7.21962 5.07694C7.99554 4.9226 8.79981 5.00181 9.53071 5.30456C10.2616 5.60731 10.8863 6.12 11.3259 6.7778C11.7654 7.4356 12 8.20896 12 9.00008C12 10.0609 11.5786 11.0784 10.8284 11.8285C10.0783 12.5787 9.06084 13.0001 7.99998 13.0001ZM6.66664 3.00008H9.33331C9.51012 3.00008 9.67969 2.92984 9.80472 2.80482C9.92974 2.67979 9.99998 2.51023 9.99998 2.33341C9.99998 2.1566 9.92974 1.98703 9.80472 1.86201C9.67969 1.73699 9.51012 1.66675 9.33331 1.66675H6.66664C6.48983 1.66675 6.32026 1.73699 6.19524 1.86201C6.07022 1.98703 5.99998 2.1566 5.99998 2.33341C5.99998 2.51023 6.07022 2.67979 6.19524 2.80482C6.32026 2.92984 6.48983 3.00008 6.66664 3.00008ZM8.66664 7.00008C8.66664 6.82327 8.59641 6.6537 8.47138 6.52868C8.34636 6.40365 8.17679 6.33341 7.99998 6.33341C7.82317 6.33341 7.6536 6.40365 7.52857 6.52868C7.40355 6.6537 7.33331 6.82327 7.33331 7.00008V8.26008C7.18236 8.3951 7.07596 8.57277 7.02819 8.76958C6.98042 8.96639 6.99354 9.17307 7.0658 9.36226C7.13807 9.55145 7.26608 9.71424 7.43289 9.82909C7.5997 9.94394 7.79745 10.0054 7.99998 10.0054C8.2025 10.0054 8.40026 9.94394 8.56707 9.82909C8.73388 9.71424 8.86188 9.55145 8.93415 9.36226C9.00642 9.17307 9.01953 8.96639 8.97177 8.76958C8.924 8.57277 8.8176 8.3951 8.66664 8.26008V7.00008Z"
        fill="#6172F3"
      />
    </Svg>
  )
}

export default Icon
