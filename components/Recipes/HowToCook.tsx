import React from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import MyButton from '../Button';

const HowToCook = ({ recipe }) => {
	const handleDirection = async () => {
		const url = recipe.source_url;
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			await Linking.openURL(url);
		} else {
			console.log("Don't know how to open this URL:", url);
		}
	};
	return (
		<View style={globalStyles?.cardContainer}>
			<Text style={styles.header}>How to Cook {recipe.title}</Text>
			<Text style={styles.body}>
				This recipe was carefully designed and tested by <Text style={styles.publisher}>{recipe.publisher}.</Text>
			</Text>
			<Text style={styles.body}>check out directions at their website.</Text>
			<MyButton onPress={handleDirection} title='Directions' />
		</View>
	);
};

export default HowToCook;

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
		paddingBottom: 30,
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
		paddingHorizontal: 15,
		marginBottom: 10,
	},
	body: {
		fontSize: 16,
		fontWeight: 'normal',
		width: '100%',
		paddingHorizontal: 15,
	},
	publisher: {
		color: 'coral',
		fontWeight: 'bold',
		fontSize: 15,
	},
});
