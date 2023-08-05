import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useSelector } from 'react-redux';
import Home from './screens/Home';

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<Home />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		alignItems: 'center',
		paddingTop: 20,
	},
});
