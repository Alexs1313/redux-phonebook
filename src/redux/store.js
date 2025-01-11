import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from '../redux/contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterReducer,
  },
});
