import { useState } from "react";
import FilterConfigurator from "./configurator";
import FilterDisplay from "./FilterDisplay";

import '../../styles/filter/filter.style.scss';

interface FilterProps {
  price: string | undefined;
  reload(): any
}



export default function Filter({ price, reload }: FilterProps) {

  const [ filterOn, setFilter ] = useState(false);

  const toggleFilter = () => {
    setFilter(prevState => !prevState)
  }

  return (
    <div id='offer-filter'>
      <FilterDisplay 
        btcPrice={price} 
        toggleFilter={toggleFilter}
        activeFilter={filterOn}
      />
      { filterOn && <FilterConfigurator reload={reload} toggleFilter={toggleFilter}/> }
    </div>
  )
} 