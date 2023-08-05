import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { useAppSelector } from '../redux/hooks';
import { Image } from 'expo-image';

const RecipeDetails = () => {
	// const [loading, setLoading] = useState(false);
	const loading = useAppSelector((state) => state.recipeByIdLoading);
	const { recipe } = useAppSelector((state) => state.recipeDetails);
	console.log(recipe);
	console.log(recipe.image_url);
	console.log(loading);

	return (
		<View style={styles.listContainer}>
			{loading ? (
				<View style={styles.spinner}>
					<Progress.CircleSnail size={100} color={['red', 'green', 'blue']} />
				</View>
			) : (
				<View>
					<Text>{recipe.title}</Text>
					<Image style={styles.image} source={recipe.image_url} alt={recipe.publisher} contentFit='cover' />
				</View>
			)}
		</View>
	);
};

export default RecipeDetails;

const styles = StyleSheet.create({
	listContainer: {
		marginHorizontal: 10,
		marginBottom: 40,
		marginTop: 20,
		flex: 1,
	},
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 2,
		marginBottom: 20,
		paddingBottom: 5,
		marginRight: 10,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		flex: 1,
	},
	image: {
		height: 200,
		width: '100%',
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