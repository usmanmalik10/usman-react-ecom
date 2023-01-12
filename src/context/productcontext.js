// create a context
// provider
// consumer => useContext Hook
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  SingleProduct: {},
};

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // My 1st API Calll for single products

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // My 2nd API Calll for single products

  const getSingleProduct = async (url) => {
    try {
      dispatch({ type: "SET_SINGLE_LOADIN" });
      const res = await axios.get(url);
      const SingleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// Custom Hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
