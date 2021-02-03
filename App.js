// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, Text, View } from 'react-native';
import IndexScreen from './src/screens/indexScreen';
import { Provider } from './src/context/BlogContext';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Index">
					<Stack.Screen name="Index" component={IndexScreen} />
				</Stack.Navigator>
				{/* <StatusBar style="auto" /> */}
			</NavigationContainer>
		</Provider>
	);
}