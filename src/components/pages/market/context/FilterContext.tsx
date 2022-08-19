import { createContext } from "react";
import useFilterReducer, { IFilterContext } from "../hooks/useFilterReducer";

const FilterContext = createContext({} as IFilterContext);

interface FilterContextProviderProps {
  children: React.ReactNode
}

export function FilterContextProvider({ children }: FilterContextProviderProps) {

  const reducer = useFilterReducer();

  return (
    <FilterContext.Provider value={{ ...reducer }}>
      { children }
    </FilterContext.Provider>
  )
}

export default FilterContext;