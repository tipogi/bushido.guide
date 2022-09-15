import { IoReload } from 'react-icons/io5'
import { MdOutlineMobiledataOff } from 'react-icons/md'
import { RiDownloadCloud2Fill } from 'react-icons/ri'
import './styles/errors.scss'

export default function ErrorNotification() {
  return (
    <div className="topic-error-block">
      <RiDownloadCloud2Fill/>
      <h1>It seems that we could not fetch the requested data, try again...</h1>
      <div>
        <button onClick={() => location.reload()}><IoReload/>Reload</button>
      </div>
    </div>
  )
}