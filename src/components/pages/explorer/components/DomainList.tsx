import DomainCard from '~/components/templates/cards/DomainCard'
import { SHOW_DOMAINS } from '~/services/graphql/queries'
import useExplorerQuery, { QUERY_OF } from '~/hooks/graphql/useExplorerQuery'
import CircleLoader, { LoaderTypes } from '~/components/templates/generic/CircleLoader'
import ErrorNotification from '../../../templates/generic/ErrorNotification'
import { ExternalError } from '~/constants'
import RouteStateError from './errors/RouterStateError'

interface Domain {
  name: string
  description: string
  url: string
  icon: string
  lang: string
  hash: string
  views: number
}

export default function DomainList() {

  const { loading, error, data } = useExplorerQuery(SHOW_DOMAINS, QUERY_OF.DOMAIN);

  const renderDomainList = () => {
    return (
      data.map(({ icon, name, description, lang, url, hash, views }: Domain) => {
        return (
          <DomainCard
            icon={icon}
            name={name}
            description={description}
            views={ views }
            lang={lang}
            url={url}
            key={hash}
            hash={hash}
          />
        )
      })
    )
  }

  const renderError = () => {
    if (error) {
      if (error === ExternalError.PATH_NOT_FOUND) {
        return <RouteStateError/>
      } else {
        return <ErrorNotification type={error}/>
      }
    }
  }

  return (
    <div id="list-container">
      { !loading && data && renderDomainList() }
      { renderError() }
      { loading && <CircleLoader type={LoaderTypes.EXPLORER}/>}
    </div>
  )
}