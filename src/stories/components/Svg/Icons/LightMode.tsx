import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 21 21" {...props}>
      <path
        d="M10.9894 5.79903C8.48029 5.79903 6.44393 7.83539 6.44393 10.3445C6.44393 12.8536 8.48029 14.8899 10.9894 14.8899C13.4985 14.8899 15.5348 12.8536 15.5348 10.3445C15.5348 7.83539 13.4985 5.79903 10.9894 5.79903ZM1.89847 11.2536H3.71665C4.21665 11.2536 4.62574 10.8445 4.62574 10.3445C4.62574 9.84448 4.21665 9.43539 3.71665 9.43539H1.89847C1.39847 9.43539 0.98938 9.84448 0.98938 10.3445C0.98938 10.8445 1.39847 11.2536 1.89847 11.2536ZM18.2621 11.2536H20.0803C20.5803 11.2536 20.9894 10.8445 20.9894 10.3445C20.9894 9.84448 20.5803 9.43539 20.0803 9.43539H18.2621C17.7621 9.43539 17.353 9.84448 17.353 10.3445C17.353 10.8445 17.7621 11.2536 18.2621 11.2536ZM10.0803 1.25357V3.07176C10.0803 3.57176 10.4894 3.98085 10.9894 3.98085C11.4894 3.98085 11.8985 3.57176 11.8985 3.07176V1.25357C11.8985 0.753573 11.4894 0.344482 10.9894 0.344482C10.4894 0.344482 10.0803 0.753573 10.0803 1.25357ZM10.0803 17.6172V19.4354C10.0803 19.9354 10.4894 20.3445 10.9894 20.3445C11.4894 20.3445 11.8985 19.9354 11.8985 19.4354V17.6172C11.8985 17.1172 11.4894 16.7081 10.9894 16.7081C10.4894 16.7081 10.0803 17.1172 10.0803 17.6172ZM5.52574 3.59903C5.44164 3.51475 5.34174 3.44789 5.23177 3.40227C5.12179 3.35665 5.0039 3.33317 4.88483 3.33317C4.76577 3.33317 4.64788 3.35665 4.5379 3.40227C4.42793 3.44789 4.32803 3.51475 4.24393 3.59903C4.15965 3.68313 4.09279 3.78303 4.04717 3.89301C4.00155 4.00298 3.97807 4.12087 3.97807 4.23994C3.97807 4.359 4.00155 4.47689 4.04717 4.58687C4.09279 4.69684 4.15965 4.79674 4.24393 4.88085L5.20756 5.84448C5.56211 6.19903 6.14393 6.19903 6.48938 5.84448C6.83483 5.48994 6.84393 4.90812 6.48938 4.56266L5.52574 3.59903ZM16.7712 14.8445C16.6871 14.7602 16.5872 14.6933 16.4772 14.6477C16.3672 14.6021 16.2494 14.5786 16.1303 14.5786C16.0112 14.5786 15.8933 14.6021 15.7834 14.6477C15.6734 14.6933 15.5735 14.7602 15.4894 14.8445C15.4051 14.9286 15.3382 15.0285 15.2926 15.1385C15.247 15.2484 15.2235 15.3663 15.2235 15.4854C15.2235 15.6045 15.247 15.7223 15.2926 15.8323C15.3382 15.9423 15.4051 16.0422 15.4894 16.1263L16.453 17.0899C16.8076 17.4445 17.3894 17.4445 17.7348 17.0899C17.8191 17.0058 17.886 16.9059 17.9316 16.796C17.9772 16.686 18.0007 16.5681 18.0007 16.449C18.0007 16.33 17.9772 16.2121 17.9316 16.1021C17.886 15.9921 17.8191 15.8922 17.7348 15.8081L16.7712 14.8445ZM17.7348 4.88085C17.8191 4.79674 17.886 4.69684 17.9316 4.58687C17.9772 4.47689 18.0007 4.359 18.0007 4.23994C18.0007 4.12087 17.9772 4.00298 17.9316 3.89301C17.886 3.78303 17.8191 3.68313 17.7348 3.59903C17.6507 3.51475 17.5508 3.44789 17.4409 3.40227C17.3309 3.35665 17.213 3.33317 17.0939 3.33317C16.9749 3.33317 16.857 3.35665 16.747 3.40227C16.637 3.44789 16.5371 3.51475 16.453 3.59903L15.4894 4.56266C15.1348 4.91721 15.1348 5.49903 15.4894 5.84448C15.8439 6.18994 16.4257 6.19903 16.7712 5.84448L17.7348 4.88085ZM6.48938 16.1263C6.57366 16.0422 6.64052 15.9423 6.68614 15.8323C6.73176 15.7223 6.75524 15.6045 6.75524 15.4854C6.75524 15.3663 6.73176 15.2484 6.68614 15.1385C6.64052 15.0285 6.57366 14.9286 6.48938 14.8445C6.40528 14.7602 6.30538 14.6933 6.1954 14.6477C6.08543 14.6021 5.96753 14.5786 5.84847 14.5786C5.72941 14.5786 5.61152 14.6021 5.50154 14.6477C5.39156 14.6933 5.29167 14.7602 5.20756 14.8445L4.24393 15.8081C3.88938 16.1627 3.88938 16.7445 4.24393 17.0899C4.59847 17.4354 5.18029 17.4445 5.52574 17.0899L6.48938 16.1263V16.1263Z"
        fill="white"
      />
    </Svg>
  )
}

export default Icon
