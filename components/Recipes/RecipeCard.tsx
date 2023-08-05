import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
const RecipeCard = ({ item }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={item.image_url} alt={item.publisher} contentFit='cover' transition={1000} />

			<View style={styles.details}>
				<Text style={styles.detailsEle}>Name: </Text>
				<Text style={styles.name}>{item?.title?.split(' ').slice(0, 2).join(' ')}</Text>
			</View>
			<View style={styles.details}>
				<Text style={styles.detailsEle}>Publisher:</Text>
				<Text style={styles.name}>{item?.publisher}</Text>
			</View>
		</View>
	);
};

export default RecipeCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 2,
		marginBottom: 20,

		marginRight: 10,
		width: 160,
	},
	image: {
		flex: 1,
		backgroundColor: '#0553',
		height: 100,
		width: 160,
		borderRadius: 5,
	},
	publisher: {
		fontWeight: 'bold',
		fontSize: 20,
	},

	details: {
		paddingHorizontal: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		width: '100%',
	},
	detailsEle: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		fontWeight: 'bold',
		fontSize: 14,
	},
	name: {
		fontSize: 13,
	},
});
