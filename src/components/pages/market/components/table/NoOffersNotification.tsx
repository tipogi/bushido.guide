import { HiAdjustments } from 'react-icons/hi'
import '~/components/templates/generic/styles/errors.scss'

export default function NoOffersNotification() {
  return (
    <div className="topic-error-block">
      <HiAdjustments/>
      <h1>It seems your filter does not match any available offer</h1>
    </div>
  )
}