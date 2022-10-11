import { useContext } from 'react'
import FilterContext from '../../../context/FilterContext'
import Direction from './Direction';
import Exchanges from './Exchanges';
import Premium from './Premium';
import Currency from './Currency';
import { BsFileArrowUp } from 'react-icons/bs';

import '../../../styles/filter/operation.style.scss';

interface FConfiguratorProps {
  reload(): void;
  toggleFilter(): void
}

export default function FilterConfigurator({ reload, toggleFilter }: FConfiguratorProps) {
  
  const { saveMarketFilters } = useContext(FilterContext);

  const fetchMarketOffers = () => {
    // Dispatch action creator to mutate the state of the context
    saveMarketFilters()
    // GraphQL query to fetch the offers
    reload()
    // Hide the filter
    toggleFilter()
  }

  return (
    <div id="filter-configurator">
      <div id="filter">
        <Direction/>
        <Exchanges/>
        <Premium/>
        <Currency/>
        <div className="apply-filter-block">
            <BsFileArrowUp onClick={fetchMarketOffers}/>
        </div>
      </div>
    </div>
  )
}