import { forEach, slice } from 'lodash';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { CardType } from '~/constants';
import useBreadcrumbsNavigate from '~/hooks/router/useBreadcrumbsNavigate';
import useExplorerNavigate from '~/hooks/router/useExplorerNavigate';

import '../styles/breadcrumbs.scss';

export default function Breadcrumbs() {

  const { pathArray, state } = useExplorerNavigate();
  const { navigateToCrumbTopic } = useBreadcrumbsNavigate();

  function renderCrumbs() {
    const rootProps = { key: 'crumb_root' };
    console.log(pathArray)
    if (pathArray.length > 0 ) Object.assign(rootProps, { onClick: () => navigateToCrumbTopic([''], CardType.ROOT) })
    let crumbs = [
      <RiTerminalBoxFill { ...rootProps }/>
    ];
    forEach(pathArray, (topic, index) => {
      const customCrumbName = topic === 'Privacy' ? 'Privacy & Security' : topic;
      if (pathArray.length - 1 > index) {
        console.log('TODO: The selection of the cardType is not generic, HARD CODED. In our case, the max deep of the topic is three, thats why with hard code works')
        const card: CardType = index == 0 ? CardType.ROOT : CardType.BRANCH;
        crumbs.push(
          <span 
            key={`crumb_${index}`} 
            onClick={() => navigateToCrumbTopic(slice(pathArray, 0, index + 1), card)}
          >{`${customCrumbName} > `}
          </span>
        );
      } else {
        const props = { key: `crumb_${index}`, onClick: undefined}
        crumbs.push(
          <span 
            {...props }
          >{`${customCrumbName}`}
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