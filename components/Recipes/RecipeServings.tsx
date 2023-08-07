import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { decreasePeople, increasePeople } from '../../redux/slices/fetchRecipe';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecipeServings = ({ recipe }) => {
	const dispatch = useAppDispatch();
	const handleIncrease = () => {
		dispatch(increasePeople(1));
	};

	const handleDecrease = () => {
		dispatch(decreasePeople(1));
	};

	return (
		<View style={globalStyles?.cardContainer}>
			<View style={styles.container}>
				<View style={styles.servingEle}>
					<Icon name='clockcircleo' size={20} color='coral' />
					<Text style={styles.servingsText}>{recipe.cooking_time} mins</Text>
				</View>
				<View style={styles.servingEle}>
					<IonIcons name='people' size={25} color='coral' />
					<Text style={styles.servingsText}>{recipe.servings} Servings</Text>
					<TouchableOpacity onPress={handleDecrease}>
						<Icon name='minuscircleo' size={20} color='coral' />
					</TouchableOpacity>
					<TouchableOpacity onPress={handleIncrease}>
						<IonIcons name='add-circle-outline' size={25} color='coral' />
					</TouchableOpacity>
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
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10,
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
