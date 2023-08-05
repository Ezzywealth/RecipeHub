import React from 'react';
import { FlatList, Pressable, Text, View, StyleSheet, ScrollView, Touchable } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/hooks';
import { setActiveCategory } from '../redux/slices/fetchRecipe';

type Prop = {
	handleFetchRecipe: (recipe: string) => void;
};
const Categories = ({ handleFetchRecipe }: Prop) => {
	const dispatch = useDispatch();
	const categories = useAppSelector((state) => state.categories);
	const activeCategory = useAppSelector((state) => state.activeCategory);

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
						<Text style={styles.category}>{item.name}</Text>
					</Pressable>
				)}
			/>

			<ScrollView style={styles.subCategoryContainer} horizontal>
				{activeCategory?.items.map((item) => (
					<Pressable key={item.id} onPress={() => handleFetchRecipe(item.name)}>
						<Text style={styles.item}>{item.name}</Text>
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
		borderColor: '#ddd',
		gap: 20,
		alignItems: 'center',
		height: 30,
		justifyContent: 'center',
	},
	category: {
		elevation: 2,
		fontSize: 18,
		borderStyle: 'solid',
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderColor: '#ddd',
	},
	subCategoryContainer: {
		flexDirection: 'row',
		overflow: 'scroll',
		height: 40,
		gap: 10,
		marginHorizontal: 10,
	},
	item: {
		textTransform: 'capitalize',
		borderStyle: 'solid',
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderColor: '#ddd',
		elevation: 2,
		height: 30,
		marginHorizontal: 2,
	},
});
