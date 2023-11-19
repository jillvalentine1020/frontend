import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/pageupdate/Slice'
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})