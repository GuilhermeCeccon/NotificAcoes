import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import LoginPage from '../src/screens/LoginPage';
import CreateAccountPage from '../src/screens/CreateAccountPage';

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
				<Stack.Screen
					name="CreateAccountPage"
					component={CreateAccountPage}
					initialParams={{ navigation }}
					options={{
						headerTitle: 'Criar Conta',
						headerShown: true,
						gestureEnabled: true,
						headerTintColor: '#fff',
						headerStyle: {
							backgroundColor: '#6930C3', 
							borderStyle: 'none'
						}
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}