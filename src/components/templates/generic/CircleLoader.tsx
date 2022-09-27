import { forEach, times } from 'lodash';
import { loaderQuotes } from '~/constants/bushido';

import './styles/circle-loader.style.scss';

export enum LoaderTypes {
  MARKET = 'market',
  EXPLORER = 'explorer'
}

interface ILoaderProps {
  type: LoaderTypes
}

export default function CircleLoader({ type }: ILoaderProps) {

  /**
   * @param lines: The line number of the loader
   */
  const createLoader = (lines: number) => {
    let loader: JSX.Element | undefined;
    forEach(times(lines), () => {
      loader = <div> { loader }</div>
    })
    return loader;
  }

  /**
   * @param loader: The loader type: 1 | 2
   */
  const renderLoader = (loader: number) => {
    return (
      <div className={`loader loader${loader}`}>
        { createLoader(loader === 1 ? 11 : 6)}
      </div>
    )
  }

  const renderQuotes = () => {
    const quoteNumber = Math.floor(Math.random() * 6) + 1;
    return (
      <div className="loader-quote">
        <h5>{ loaderQuotes[quoteNumber] }</h5>
      </div>
    )
  }

  return (
    <div className="market-loader-container">
      <div className={`${type}-loader`}>
        { renderLoader(Math.floor(Math.random() * 2) + 1) }
      </div>
      { type === LoaderTypes.MARKET && renderQuotes() }
    </div>
    
  )
}