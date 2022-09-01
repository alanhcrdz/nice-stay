// create a persisted reducer.
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

import { createStore, combineReducers, applyMiddleware } from "redux";

// let thunk make AJAX API calls asynchronouns
import thunk from "redux-thunk";

//import the reducers
import propertiesReducer from "./reducers";

//define a rootReducer

// then, add a persistConfig
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["favorites"],
  // now update persist reducer
};

const rootReducer = combineReducers({
  propertiesReducer: persistReducer(persistConfig, propertiesReducer),
});

// create store and put root and apply middlewares
export const store = createStore(rootReducer, applyMiddleware(thunk));

//persistor
export const persistor = persistStore(store); // go to App.js and import PersistGate

// next step: bind this store intp Provider in App.js
