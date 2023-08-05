import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './slices/fetchRecipe';

const store = configureStore({
	reducer: recipeReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
