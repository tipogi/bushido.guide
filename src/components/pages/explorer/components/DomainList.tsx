import DomainCard from '~/components/templates/cards/DomainCard'
import { SHOW_DOMAINS } from '~/services/graphql/queries'
import useExplorerQuery from '~/hooks/graphql/useExplorerQuery'

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

  const { leafList } = useExplorerQuery(SHOW_DOMAINS);
  console.log(leafList)

  const renderDomainList = () => {
    if (leafList.data) {
      return (
        leafList.data.showDomains.map(({ icon, name, description, lang, url, hash, visits }: Domain) => {
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
    } else {
      return <h1>Empty Domains</h1>
    }
  }

  return (
    <div id="list-container">
      { renderDomainList() }
    </div>
  )
}