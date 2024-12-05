import { combineReducers } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import themeReducer from './slices/themeSlice';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  theme: themeReducer,
});

export default rootReducer;
