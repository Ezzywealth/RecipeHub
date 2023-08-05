import React, { useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { fetchRecipes } from '../redux/slices/fetchRecipe';
import Categories from '../components/categories';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import RecipeCard from '../components/Recipes/RecipeCard';

const Home = () => {
	const dispatch = useAppDispatch();
	const category = useAppSelector((state) => state.activeCategory);
	const recipes = useAppSelector((state) => state.recipes);
	console.log(recipes);

	useEffect(() => {
		dispatch(fetchRecipes(category.name));
	}, []);

	const handleFetchRecipe = async (recipe: string) => {
		const result = await dispatch(fetchRecipes(recipe));

		// console.log(result);
	};

	return (
		<View>
			<Categories handleFetchRecipe={handleFetchRecipe} />
			<Text> This is the home page</Text>
			<FlatList style={styles.listContainer} numColumns={2} data={recipes} keyExtractor={(item) => item.id} renderItem={({ item }) => <RecipeCard item={item} />} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	listContainer: {
		marginHorizontal: 10,
		marginVertical: 40,
	},
});
