import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	cardContainer: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
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
});
