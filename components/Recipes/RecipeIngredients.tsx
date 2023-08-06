import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/AntDesign';

const RecipeIngredients = ({ recipe }) => {
	const { ingredients } = recipe;

	ingredients.forEach((ingredient, ind) => {
		return {
			...ingredient,
			id: ind + 1,
		};
	});

	console.log(ingredients);

	return (
		<View style={globalStyles?.cardContainer}>
			<Text style={styles.header}>Ingredients for {recipe.title}</Text>
			<View style={styles.container}>
				<FlatList
					data={ingredients}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<View key={item.id} style={styles.servingsText}>
							<Icon name='check' size={20} color='coral' />
							<Text style={styles.servingEle}>
								<Text>{item?.quantity}</Text>
								<Text>{item?.unit}</Text>
								<Text>{item?.description}</Text>
							</Text>
						</View>
					)}
				/>
			</View>
		</View>
	);
};

export default RecipeIngredients;

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingVertical: 10,
		flexWrap: 'wrap',
	},
	servingEle: {
		flexDirection: 'row',
		gap: 10,
		marginHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	servingsText: {
		fontSize: 16,
		fontWeight: 'bold',
		flexDirection: 'row',
		alignItems: 'center',
	},
	header: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 20,
	},
});
