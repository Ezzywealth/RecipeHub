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
	recipeDetails: {
		recipe: {
			cooking_time: 0,
			id: '',
			image_url: '',
			ingredients: [],
			publisher: '',
			servings: 0,
			source_url: '',
			title: '',
		},
	},
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
	const { data } = await axios.get(`${recipeUrl}/${id}`);
	return data.data;
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
		builders.addCase(fetchRecipeDetail.pending, (state, action) => {
			state.recipeByIdLoading = true;
		});
		builders.addCase(fetchRecipeDetail.fulfilled, (state, action) => {
			state.recipeByIdLoading = false;
			state.recipeDetails = action.payload;
			state.recipeByIdError = '';
		});
		builders.addCase(fetchRecipeDetail.rejected, (state, action) => {
			state.recipeByIdError = 'There was an error fetching the details of this recipe';
			state.recipeByIdLoading = false;
		});
	},
});

export default recipeSlice.reducer;

export const { setActiveCategory, setActiveRecipe } = recipeSlice.actions;
