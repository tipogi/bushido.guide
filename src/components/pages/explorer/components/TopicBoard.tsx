import TopicCard from '~/components/templates/cards/TopicCard';
import useExplorerNavigate from '~/hooks/router/useExplorerNavigate';
import useExplorerQuery, { QUERY_OF } from '~/hooks/graphql/useExplorerQuery';
import { SHOW_TOPICS } from '~/services/graphql/queries';
import { CardType, ExternalError } from '~/constants';
import CircleLoader, { LoaderTypes } from "~/components/templates/generic/CircleLoader";
import ErrorNotification from '../../../templates/generic/ErrorNotification';
import { GraphQLError } from 'graphql';
import DomainList from './DomainList';

interface Card {
  name: string
  description: string
  icon: string
  type: CardType
  hash: string
}



export default function TopicBoard() {

  const { loading, error, data } = useExplorerQuery(SHOW_TOPICS, QUERY_OF.TOPIC);
  const { explorerNavigate } = useExplorerNavigate();

  const renderTopicBoard = () => {
    return (
      data.map(({ name, description, icon, type, hash }: Card, index: number) => {
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
  }

  const renderError = () => {
    if (error) {
      console.log(error)
      if (error === ExternalError.PATH_NOT_FOUND) {
        return <DomainList/>
      } else {
        return <ErrorNotification type={error}/>
      }
    }
  }

  return (
    <div id="cards-container">
        { !loading && data && 
          <div id='container-list'>{ renderTopicBoard() }</div> 
        }
      { renderError() }
      { loading && <CircleLoader type={LoaderTypes.EXPLORER}/>}
    </div>
  )
}

