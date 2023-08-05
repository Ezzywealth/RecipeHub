import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { fetchRecipes } from '../redux/slices/fetchRecipe';
import Categories from '../components/categories';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Home = () => {
	const dispatch = useAppDispatch();
	const category = useAppSelector((state) => state.activeCategory);

	useEffect(() => {
		dispatch(fetchRecipes(category.name));
	}, []);

	return (
		<View>
			<Categories />
			<Text> This is the home page</Text>
		</View>
	);
};

export default Home;
