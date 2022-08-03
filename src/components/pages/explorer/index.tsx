import TopicCard from '@/components/templates/cards/TopicCard';
import useTopicQuery from '@/hooks/useTopicQuery';
import useExplorerNavigate from '@/hooks/useExplorerNavigate';

import '../styles/explorer.scss';

interface Domain {
  name: string
  description: string
  url: string
  icon: string
  lang: string
  hash: string
}

const Explorer: React.FC = () => {

  const { topicArray } = useTopicQuery();
  let explorerNavigate = useExplorerNavigate(); 

  const renderCards = () => {
    if (topicArray.data) {
      return (
        topicArray.data.showTopics.map((card: any) => {
          return (
            <TopicCard 
              name={card.name}
              description={card.description}
              icon={ card.icon } 
              folderType={card.type} 
              key={card.hash}
              navigateEvent={(name: string) => {
                console.log('Event Name param:', name)
                console.log('Event card object:', card)
                explorerNavigate(name, card.type)
              }}
            />
          )
        })
      )
    } else {
      return <h1>Empty</h1>
    }
  }

  return (
    <div id="explorer-container" className='block-wo-height'>
      <div id="list-container">
        {
          renderCards()
        }
      </div>
    </div>
  )
}

export default Explorer;
