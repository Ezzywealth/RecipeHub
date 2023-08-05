import React from 'react';
import { FlatList, Pressable, Text, View, StyleSheet, ScrollView, Touchable } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/hooks';
import { setActiveCategory, setActiveRecipe } from '../redux/slices/fetchRecipe';

type Prop = {
	handleFetchRecipe: ({ recipe, id }) => void;
};

const Categories = ({ handleFetchRecipe }: Prop) => {
	const dispatch = useDispatch();
	const categories = useAppSelector((state) => state.categories);
	const activeCategory = useAppSelector((state) => state.activeCategory);
	const activeRecipeName = useAppSelector((state) => state.activeRecipeName);

	const handleCategorySelect = (id: number) => {
		dispatch(setActiveCategory(id));
	};

	return (
		<View style={styles.container}>
			<FlatList
				contentContainerStyle={styles.categoriesContainer}
				data={categories}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Pressable onPress={() => handleCategorySelect(item.id)}>
						<Text
							style={{
								...styles.category,
								...(activeCategory.name === item.name ? styles.activeCategory : {}),
							}}>
							{item.name}
						</Text>
					</Pressable>
				)}
			/>

			<ScrollView style={styles.subCategoryContainer} horizontal>
				{activeCategory?.items.map((item) => (
					<Pressable key={item.id} onPress={() => handleFetchRecipe({ recipe: item.name, id: item.id })}>
						<Text style={{ ...styles.item, ...(activeRecipeName === item.name ? styles.activeSubCategory : {}) }}>{item.name}</Text>
					</Pressable>
				))}
			</ScrollView>
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({
	container: {
		height: 120,
	},
	categoriesContainer: {
		flexDirection: 'row',
		marginTop: 30,
		gap: 20,
		alignItems: 'center',
		height: 30,
		justifyContent: 'center',
	},
	category: {
		shadowColor: '#fff',
		borderColor: 'coral',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 2,
		fontSize: 16,
		color: '#212121',
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderWidth: 1,
	},
	activeCategory: {
		backgroundColor: 'coral',
		color: '#fff',
	},
	subCategoryContainer: {
		flexDirection: 'row',
		overflow: 'scroll',
		height: 40,
		gap: 10,
		marginHorizontal: 10,
	},
	activeSubCategory: {
		backgroundColor: 'coral',
		color: '#fff',
	},
	item: {
		textTransform: 'capitalize',
		borderStyle: 'solid',
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderColor: 'coral',
		borderWidth: 1,
		elevation: 2,
		shadowColor: '#fff',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		height: 30,
		marginHorizontal: 2,
	},
});
