import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

const RecipeCard = ({ item, handleRecipeView }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={item.image_url} alt={item.publisher} contentFit='cover' transition={1000} />
			<View style={styles.details}>
				<Text style={styles.detailsEle}>Name: </Text>
				<Text style={styles.name}>{item?.title?.split(' ').slice(0, 1).join(' ')}</Text>
			</View>
			<View style={styles.details}>
				<Text style={styles.detailsEle}>Publisher:</Text>
				<Text style={styles.name}>{item?.publisher}</Text>
			</View>
			<Pressable onPress={() => handleRecipeView(item.id)}>
				<Text style={styles.viewMore}>view details</Text>
			</Pressable>
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
		flex: 1,
		backgroundColor: '#0553',
		height: 100,
		width: '100%',
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
	viewMore: {
		textDecorationLine: 'underline',
		textTransform: 'capitalize',
		paddingBottom: 2,
		textDecorationColor: 'coral',
		color: 'coral',
		fontSize: 13,
		fontWeight: 'bold',
		letterSpacing: 1.2,
	},
});
