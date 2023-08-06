import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';

const RecipeServings = ({ recipe }) => {
	return (
		<View style={globalStyles?.cardContainer}>
			<View style={styles.container}>
				<View style={styles.servingEle}>
					<Icon name='clockcircleo' size={20} color='coral' />
					<Text style={styles.servingsText}>{recipe.cooking_time}</Text>
				</View>
				<View style={styles.servingEle}>
					<IonIcons name='people' size={25} color='coral' />
					<Text style={styles.servingsText}>{recipe.servings} Servings</Text>
					<Icon name='minuscircleo' size={20} color='coral' />
					<IonIcons name='add-circle-outline' size={25} color='coral' />
				</View>
				<View>
					<IonIcons name='bookmarks-outline' size={25} color='coral' />
				</View>
			</View>
		</View>
	);
};

export default RecipeServings;

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flexDirection: 'row',
		// height: 50,
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
		fontSize: 18,
		fontWeight: 'bold',
	},
});
