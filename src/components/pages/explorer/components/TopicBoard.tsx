import TopicCard from '~/components/templates/cards/TopicCard';
import useExplorerNavigate from '~/hooks/router/useExplorerNavigate';
import useExplorerQuery from '~/hooks/graphql/useExplorerQuery';
import { SHOW_TOPICS } from '~/services/graphql/queries';
import { CardType } from '~/constants';
import Breadcrumbs from './Breadcrumbs';

interface Card {
  name: string
  description: string
  icon: string
  type: CardType
  hash: string
}

export default function TopicBoard() {

  const { leafList } = useExplorerQuery(SHOW_TOPICS);
  const { explorerNavigate } = useExplorerNavigate();

  const renderTopicBoard = () => {
    if (!leafList.loading && leafList.data) {
      return (
        leafList.data.showTopics.map(({ name, description, icon, type, hash }: Card, index: number) => {
          return (
            <TopicCard 
              index={index}
              name={ name }
              description={ description }
              icon={ icon } 
              cardType={ type } 
              key={ hash }
              navigateEvent={ (pathName: string) => explorerNavigate(pathName, type, description) }
              hash={hash}
            />
          )
        })
      )
    } else {
      return <h1>Empty Topics</h1>
    }
  }
  return (
    <div id="cards-container">
      <div id='container-list'>
        { renderTopicBoard() }
      </div>
    </div>
  )
}