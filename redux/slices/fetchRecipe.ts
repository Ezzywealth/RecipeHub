import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import menuCategories from '../../utils/category';
import { AppState } from '../../utils/typings';

const recipesUrl = process.env.EXPO_PUBLIC_RECIPE_SEARCH_URL;
const recipeUrl = process.env.EXPO_PUBLIC_RECIPE_DETAILS_URL;

const initialState: AppState = {
	recipes: [],
	recipeLoading: false,
	recipeError: null,
	recipeDetails: {},
	recipeByIdLoading: false,
	recipeByIdError: null,
	activeCategory: menuCategories[0],
	activeRecipeId: 0,
	categories: menuCategories,
	activeRecipeName: '',
};

export const fetchRecipes = createAsyncThunk('fetchRecipes', async (recipe: string) => {
	if (!recipe) return;
	const { data } = await axios.get(`${recipesUrl}=${recipe}`);
	return data.data.recipes;
});

export const fetchRecipeDetail = createAsyncThunk('fetchRecipeDetail', async (id: string) => {
	if (!id) return;
	const { data } = await axios.get(`${recipeUrl}=${id}`);

	return data.data.recipes;
});

const recipeSlice = createSlice({
	name: 'recipeSlice',
	initialState,
	reducers: {
		setActiveCategory: (state, action) => {
			state.activeCategory = state.categories.find((category) => category.id === action.payload);
			state.activeRecipeName = state.activeCategory.items[0].name;
		},
		setActiveRecipe: (state, action) => {
			state.activeRecipeName = action.payload.recipe;
			state.activeRecipeId = action.payload.id;
		},
	},
	extraReducers: (builders) => {
		builders.addCase(fetchRecipes.pending, (state, action) => {
			state.recipeLoading = true;
		});
		builders.addCase(fetchRecipes.fulfilled, (state, action) => {
			state.recipeLoading = false;
			state.activeRecipeId = state.activeCategory.id;
			state.recipes = action.payload;
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

export const { setActiveCategory, setActiveRecipe } = recipeSlice.actions;
