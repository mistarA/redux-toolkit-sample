import { configureStore } from '@reduxjs/toolkit/src/configureStore';
import searchlistreducer from '../screens/searchlist/searchlistslice';
import counterReducer from '../screens/Counter/counterSlice';
export default configureStore({
  reducer: {
    searchlist: searchlistreducer,
    counter: counterReducer,
  },
});
