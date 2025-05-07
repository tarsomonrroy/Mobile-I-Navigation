import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomePage';
import DetailsScreen from './screens/Details';
import AboutScreen from './screens/About';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
                <Stack.Screen name="About" component={AboutScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}