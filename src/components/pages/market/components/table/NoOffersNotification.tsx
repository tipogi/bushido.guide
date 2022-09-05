import { BsHr } from 'react-icons/bs'
import '~/components/templates/generic/styles/errors.scss'

export default function NoOffersNotification() {
  return (
    <div className="topic-error-block">
      <BsHr/>
      <h1>It seems your filter does not match any available offer</h1>
    </div>
  )
}