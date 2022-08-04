import TopicCard from '~/components/templates/cards/TopicCard';
import useExplorerNavigate from '~/hooks/useExplorerNavigate';
import useExplorerQuery from '~/hooks/useExplorerQuery';
import { SHOW_TOPICS } from '~/graphql/queries';

export default function TopicBoard() {

  const { leafList } = useExplorerQuery(SHOW_TOPICS);
  const { explorerNavigate, pathArray } = useExplorerNavigate();

  console.log('topic rnder')

  const renderTopicBoard = () => {
    console.log('TOpicBoardData:', leafList.data)
    if (leafList.data) {
      return (
        leafList.data.showTopics.map((card: any) => {
          return (
            <TopicCard 
              name={ card.name }
              description={ card.description }
              icon={ card.icon } 
              cardType={ card.type } 
              key={ card.hash }
              navigateEvent={ (name: string) => explorerNavigate(name, card.type) }
            />
          )
        })
      )
    } else {
      return <h1>Empty Topics</h1>
    }
  }
  return (
    <div id="list-container">
      { renderTopicBoard() }
    </div>
  )
}