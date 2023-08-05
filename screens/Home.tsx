import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, Modal } from 'react-native';
import { fetchRecipeDetail, fetchRecipes, setActiveRecipe } from '../redux/slices/fetchRecipe';
import Categories from '../components/categories';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import RecipeCard from '../components/Recipes/RecipeCard';
import * as Progress from 'react-native-progress';

type Props = {
	recipe: string;
	id: number;
};
const Home = () => {
	const [recipeModal, setRecipeModal] = useState(false);
	const dispatch = useAppDispatch();
	const category = useAppSelector((state) => state.activeCategory);
	const recipes = useAppSelector((state) => state.recipes);
	const activeRecipeName = useAppSelector((state) => state.activeRecipeName);
	const recipeLoading = useAppSelector((state) => state.recipeLoading);

	useEffect(() => {
		dispatch(fetchRecipes(category.name));
	}, [category]);

	useEffect(() => {
		dispatch(setActiveRecipe({ recipe: category.items[0].name, id: 0 }));
	}, []);

	const handleFetchRecipe = async ({ recipe, id }: Props) => {
		const result = await dispatch(fetchRecipes(recipe));
		const res = await dispatch(setActiveRecipe({ recipe, id }));
	};

	const handleRecipeView = async (id: string) => {
		await dispatch(fetchRecipeDetail(id));
	};

	return (
		<View>
			{recipeModal && (
				<Modal>
					<View></View>
				</Modal>
			)}
			<Categories handleFetchRecipe={handleFetchRecipe} />
			<Text style={styles.header}> List of different {activeRecipeName} menus</Text>
			{recipeLoading ? (
				<View style={styles.spinner}>
					<Progress.CircleSnail size={100} color={['red', 'green', 'blue']} />
				</View>
			) : (
				<FlatList style={styles.listContainer} numColumns={2} data={recipes} keyExtractor={(item: any) => item.id} renderItem={({ item }) => <RecipeCard item={item} handleRecipeView={handleRecipeView} />} />
			)}
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	listContainer: {
		marginHorizontal: 10,
		marginBottom: 40,
		marginTop: 20,
	},
	header: {
		fontWeight: 'bold',
		fontSize: 25,
		textTransform: 'capitalize',
		textAlign: 'center',
	},
	spinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eeeeee',
	},
});
