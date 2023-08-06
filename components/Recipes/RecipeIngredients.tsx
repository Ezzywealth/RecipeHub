import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

const RecipeIngredients = ({ recipe }) => {
	const { ingredients } = recipe;

	ingredients.forEach((ingredient, ind: number) => {
		ingredient.id = ind + 1;
	});

	return (
		<View style={globalStyles?.cardContainer}>
			<Text style={styles.header}>Ingredients for {recipe.title}</Text>
			<View style={styles.container}>
				<ScrollView>
					{ingredients.map((item) => (
						<View key={item.id} style={styles.servingsText}>
							<Icon name='check' size={16} color='coral' />
							<Text style={styles.servingEle}>
								{item?.quantity && <Text>{item?.quantity} </Text>}
								{item?.unit && <Text>{item?.unit} </Text>}
								{item?.description && <Text>{item?.description} </Text>}
							</Text>
						</View>
					))}
				</ScrollView>
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
		paddingHorizontal: 10,
	},
});
