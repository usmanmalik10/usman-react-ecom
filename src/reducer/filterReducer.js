import { Action } from '@remix-run/router';

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      return {
        ...state,
        filter_Reducer: action.payload,
        all_products: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
