import { createContext, useContext, useReducer, useEffect } from 'react';
import { useProductContext } from './productcontext';
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  console.log(
    '🚀 ~ file: filterContext.js:14 ~ FilterContextProvider ~ products',
    products
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custome Hooks

export const useFilterContext = () => {
  return useContext(FilterContext);
};
