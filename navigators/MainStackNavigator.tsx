import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNi from '../screens/HomeNi';
import HomeSour from '../screens/HomeSour';


export type MainStackParamList = {
    HomeNi: undefined;
    HomeSour: { id: number, tweet_text: string };

};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="HomeNi"
                component={HomeNi}
                options={{ title: 'Inicio' }} />
            <Stack.Screen 
            
            name="HomeSour"
            component={HomeSour}    
            options={{ title: 'Taks' }}
             />
        </Stack.Navigator>
    )
}

export default MainStackNavigator

const styles = StyleSheet.create({})
