import {
  configureStore,
} from '@reduxjs/toolkit';
import greetings from './greetingSlice';

export default configureStore({
  reducer: {
    greetings,
  },
});
