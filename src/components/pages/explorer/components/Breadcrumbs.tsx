import { forEach, slice } from 'lodash';
import test from 'node:test';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { CardType } from '~/constants';
import useBreadcrumbsNavigate from '~/hooks/router/useBreadcrumbsNavigate';
import useDescriptionStorage from '~/hooks/router/useDescriptionStorage';
import useExplorerNavigate from '~/hooks/router/useExplorerNavigate';

export default function Breadcrumbs() {

  const { pathArray, state } = useExplorerNavigate();
  const { navigateToCrumbTopic } = useBreadcrumbsNavigate();

  function renderCrumbs() {
    let crumbs = [
      <RiTerminalBoxFill 
        onClick={() => navigateToCrumbTopic([''], CardType.ROOT)} 
        key={'crumb_root'}
        />
    ];
    forEach(pathArray, (topic, index) => {
      if (pathArray.length - 1 > index) {
        console.log('TODO: The selection of the cardType is not generic, HARD CODED. In our case, the max deep of the topic is three, thats why with hard code works')
        const card: CardType = index == 0 ? CardType.ROOT : CardType.BRANCH;
        crumbs.push(
          <span 
            key={`crumb_${index}`} 
            onClick={() => navigateToCrumbTopic(slice(pathArray, 0, index + 1), card)}
          >{`${topic} > `}
          </span>
        );
      } else {
        const props = { key: `crumb_${index}`, onClick: undefined}
        crumbs.push(
          <span 
            {...props }
          >{`${topic}`}
          </span>)
      }
    })
    return crumbs;
  }

  return (
    <div className="breadcrumb-block">
      <div id='list-breadcrumbs'>{ renderCrumbs() }</div>
      <div id='list-breadcrumbs-legend'>{state === null ? '' : state.description}</div> 
    </div>
  )
}