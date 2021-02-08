// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, Text, View } from 'react-native';
import IndexScreen from './src/screens/indexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/createScreen';
import { TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons"
import EditScreen from './src/screens/editScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Index">
					<Stack.Screen name="Index"
						component={IndexScreen}
						options={({navigation}) => (
							{
							headerRight: () => (
								<TouchableOpacity onPress={() => navigation.navigate("Create")}>
									<Feather name="plus" size={30} />
								</TouchableOpacity>
							)
						}
						)}
					/>
					<Stack.Screen name="Show" component={ShowScreen} />
					<Stack.Screen name="edit" component={EditScreen} />
					<Stack.Screen name="Create"
						component={CreateScreen}
					/>
				</Stack.Navigator>
				{/* <StatusBar style="auto" /> */}
			</NavigationContainer>
		</Provider>
	);
}