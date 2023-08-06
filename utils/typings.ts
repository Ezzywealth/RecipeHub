export type MenuType = {
	id: number;
	name: string;
};

export type CategoryProp = {
	id: number;
	name: string;
	items: MenuType[];
};

export interface AsyncThunkReturn<Data, ThunkArg = void, RejectedValue = any> {
	data: any;
	promise: Promise<Data>;
	requestId: string;
	arg: ThunkArg;
}

export type RecipesProp = {
	id: string;
	name: string;
};

export type AppState = {
	recipes: [];
	recipeLoading: boolean;
	recipeError: string;
	recipeDetails: RecipeProp;
	recipeByIdLoading: boolean;
	recipeByIdError: string;
	activeCategory: CategoryProp;
	activeRecipeId: number;
	categories: CategoryProp[];
	activeRecipeName: string;
};

export type RecipeProp = {
	recipe: {
		cooking_time: number;
		id: string;
		image_url: string;
		ingredients: IngredientProp[];
		publisher: string;
		servings: number;
		source_url: string;
		title: string;
	};
};

export type IngredientProp = {
	description: string;
	quantity: number;
	unit: string;
};
