import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './screens/Home';
import RecipeDetails from './screens/RecipeDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Animated } from 'react-native';
export default function App() {
	const av = new Animated.Value(0);
	av.addListener(() => {
		return;
	});
	const Stack = createStackNavigator();
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='RecipesHub' component={Home} />
					<Stack.Screen name='RecipeDetails' component={RecipeDetails} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		alignItems: 'center',
		paddingVertical: 20,
	},
});
