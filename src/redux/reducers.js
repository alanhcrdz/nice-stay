import {
  ADD_TO_FAVORITES,
  GET_PROPERTIES,
  REMOVE_FROM_FAVORITES,
} from "./actions";

// define the initial state
const initialState = {
  properties: [],
  favorites: [],
};

export const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (property) => property.id != action.payload.id
        ),
      }; // Next: Configure and integrate redux persist, will not fetch data from here until fix, go to store.js

    default:
      return state;
  }
};

export default propertiesReducer;
//next step: configure the store to bring actions and reducers together
