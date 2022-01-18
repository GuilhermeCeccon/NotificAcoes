import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import LoginPage from '../src/screens/LoginPage';

const Stack = createStackNavigator();
const headerShown = false;

export default function App({ navigation }) {
	return (
		<NavigationContainer initialRouteName="LoginPage">
			<StatusBar style="auto" />

			<Stack.Navigator>
				{/* Passenger Routes */}
				<Stack.Screen
					name="LoginPage"
					component={LoginPage}
					initialParams={{ navigation }}
					options={{ headerShown, gestureEnabled: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}