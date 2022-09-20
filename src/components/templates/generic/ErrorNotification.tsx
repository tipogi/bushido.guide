import { RiRefreshLine, RiUploadCloud2Fill } from 'react-icons/ri'
import { ExternalError } from '~/constants';
import './styles/errors.scss';

interface IErrorNotification {
  type: ExternalError
}

export default function ErrorNotification({ type }: IErrorNotification) {

  const renderErrorMessage = () => {
    switch (type) {
      case ExternalError.CONNECTION_REFUSED:
        return 'It seems that we could not establish the connection with the external service, something went wrong';
      case ExternalError.INTERNAL_ERROR:
        return 'It seems we could not process the query as usually, some values has to be modified'
    }
  }

  return (
    <div className="topic-error-block">
      <RiUploadCloud2Fill/>
      <h1>{ renderErrorMessage() }</h1>
      <div>
        <button onClick={() => location.reload()}><RiRefreshLine/>Reload</button>
      </div>
    </div>
  )
}