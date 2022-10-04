import { useModal } from '../Modal'
import AttendEventModal from './index'

const useAttendEventModal = (data?: any) => {
  const [onPresentAttendEventModal] = useModal(
    <AttendEventModal eventData={data} />,
  )
  console.log(data)

  return { onPresentAttendEventModal }
}
export default useAttendEventModal
