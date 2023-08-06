import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = ({ onPress, title }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'coral',
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 5,
		marginVertical: 10,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default MyButton;
