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
	recipeDetails: {};
	recipeByIdLoading: boolean;
	recipeByIdError: string;
	activeCategory: CategoryProp;
	activeRecipeId: number;
	categories: CategoryProp[];
	activeRecipeName: string;
};
