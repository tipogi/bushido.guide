import { RiRefreshLine, RiUploadCloud2Fill } from 'react-icons/ri'
import './styles/errors.scss'

export default function ErrorNotification() {
  return (
    <div className="topic-error-block">
      <RiUploadCloud2Fill/>
      <h1>It seems that we could not establish the connection with the external service, something went wrong</h1>
      <div>
        <button onClick={() => location.reload()}><RiRefreshLine/>Reload</button>
      </div>
    </div>
  )
}