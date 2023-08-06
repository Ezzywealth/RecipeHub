import React from 'react';
import { Button, Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Image } from 'expo-image';

const RecipeCard = ({ item, handleRecipeView }) => {
	const windowWidth = Dimensions.get('window').width;
	const cardWidth = windowWidth / 2 - 10;
	return (
		<Pressable onPress={() => handleRecipeView(item.id)} style={[styles.container, { width: cardWidth }]}>
			<Image style={styles.image} source={item.image_url} alt={item.publisher} contentFit='cover' transition={1000} />
			<View style={styles.details}>
				<Text style={styles.name}>{item?.title.length > 20 ? `${item?.title.substring(0, 20)}...` : item?.title}</Text>
				<Text style={styles.publisher}>By {item?.publisher}</Text>
			</View>
		</Pressable>
	);
};

export default RecipeCard;

const styles = StyleSheet.create({
	container: {
		col: 1,
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
	},
	image: {
		flex: 1,
		backgroundColor: '#0553',
		height: 120,
		width: '100%',
		borderRadius: 5,
	},
	publisher: {
		fontSize: 11,
		fontWeight: 'normal',
		justifyContent: 'center',
		flexDirection: 'row',
		paddingHorizontal: 10,
		marginTop: 2,
		fontStyle: 'italic',
	},

	details: {
		paddingVertical: 5,
	},
	name: {
		fontSize: 15,
		fontWeight: 'bold',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row',
		paddingHorizontal: 10,
		flexWrap: 'wrap',
	},
});
