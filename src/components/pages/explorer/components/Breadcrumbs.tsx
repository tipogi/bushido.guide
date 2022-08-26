import { forEach, slice } from 'lodash';
import test from 'node:test';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { CardType } from '~/constants';
import useDescriptionStorage from '~/hooks/router/useDescriptionStorage';
import useExplorerNavigate from '~/hooks/router/useExplorerNavigate';

export default function Breadcrumbs() {

  const { pathArray, state } = useExplorerNavigate();
  const navigate = useNavigate();
  const { findDescription } = useDescriptionStorage()
  console.log(state, pathArray)

  const test = (ar: string[], cardType: CardType) => {
    const pathWithSlash = ar.map(topic => topic.toLowerCase()).toString().replace(/,/g,'/');
    console.log(pathWithSlash);
    const description = findDescription(pathWithSlash)
    navigate(pathWithSlash, { state: { cardType, description }})
  }

  function renderCrumbs() {
    let crumbs = [<RiTerminalBoxFill key={'crumb_root'}/>];
    forEach(pathArray, (topic, index) => {
      if (pathArray.length - 1 > index) {
        console.log('This is not generic, it is hard coded. In our case the max deep of topic are three that why with hard code works')
        const card: CardType = index == 0 ? CardType.ROOT : CardType.BRANCH;
        crumbs.push(<span key={`crumb_${index}`} onClick={() => test(slice(pathArray, 0, index + 1), card)}>{`${topic} > `}</span>);
      } else {
        const props = { key: `crumb_${index}`, onClick: undefined}
        crumbs.push(<span {...props }>{`${topic}`}</span>)
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