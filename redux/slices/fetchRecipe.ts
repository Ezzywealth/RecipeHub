import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import menuCategories from '../../utils/category';
import { AppState, AsyncThunkReturn, RecipesProp } from '../../utils/typings';

const recipesUrl = process.env.EXPO_PUBLIC_RECIPE_SEARCH_URL;
const recipeUrl = process.env.EXPO_PUBLIC_RECIPE_DETAILS_URL;

const initialState: AppState = {
	recipes: [],
	recipeLoading: false,
	recipeError: null,
	recipe: {},
	recipeByIdLoading: false,
	recipeByIdError: null,
	activeCategory: menuCategories[0],
	categories: menuCategories,
};

export const fetchRecipes = createAsyncThunk('fetchRecipes', async (recipe: string) => {
	console.log(recipe);
	console.log(recipesUrl);
	if (!recipe) return;
	const { data } = await axios.get(`${recipesUrl}=${recipe}`);
	console.log(data);
	return data.data.recipes;
});

const recipeSlice = createSlice({
	name: 'recipeSlice',
	initialState,
	reducers: {
		setActiveCategory: (state, action) => {
			state.activeCategory = state.categories.find((category) => category.id === action.payload);
		},
	},
	extraReducers: (builders) => {
		builders.addCase(fetchRecipes.pending, (state, action) => {
			state.recipeLoading = true;
		});
		builders.addCase(fetchRecipes.fulfilled, (state, action) => {
			state.recipeLoading = false;
			state.recipes = action.payload;
			console.log(action.payload);
			state.recipeError = '';
		});
		builders.addCase(fetchRecipes.rejected, (state, action) => {
			state.recipeError = 'There was an error fetching this recipe';
			state.recipeLoading = false;
			state.recipes = [];
		});
	},
});

export default recipeSlice.reducer;

export const { setActiveCategory } = recipeSlice.actions;
