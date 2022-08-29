import DomainCard from '~/components/templates/cards/DomainCard'
import { SHOW_DOMAINS } from '~/services/graphql/queries'
import useExplorerQuery, { QUERY_OF } from '~/hooks/graphql/useExplorerQuery'
import CircleLoader, { LoaderTypes } from '~/components/templates/generic/CircleLoader'

interface Domain {
  name: string
  description: string
  url: string
  icon: string
  lang: string
  hash: string
  visits: number
}

export default function DomainList() {

  const { loading, error, data } = useExplorerQuery(SHOW_DOMAINS, QUERY_OF.DOMAIN);

  const renderDomainList = () => {
    return (
      data.map(({ icon, name, description, lang, url, hash, visits }: Domain) => {
        return (
          <DomainCard
            icon={icon}
            name={name}
            description={description}
            visits={ visits }
            lang={lang}
            url={url}
            key={hash}
            hash={hash}
          />
        )
      })
    )
  }

  return (
    <div id="list-container">
      { !loading && data && renderDomainList() }
      { error && <span>Error</span>}
      { loading && <CircleLoader type={LoaderTypes.EXPLORER}/>}
    </div>
  )
}