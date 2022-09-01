import { IoReload } from 'react-icons/io5'
import { MdOutlineErrorOutline } from 'react-icons/md'
import './styles/errors.scss'

export default function ErrorNotification() {
  return (
    <div className="topic-error-block">
      <MdOutlineErrorOutline/>
      <h1>It seems that we could not fetch the requested data, try again...</h1>
      <div>
        <button onClick={() => location.reload()}><IoReload/>Reload</button>
      </div>
    </div>
  )
}