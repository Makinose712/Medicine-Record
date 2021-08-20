import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';
import DrugListScreen from './src/screens/DrugListScreen';
import LoginScreen from './src/screens/LoginScreen';
import ReadScreen from './src/screens/ReadScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import QrScreen from './src/screens/QrScreen';

import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.apps.length === 0 ) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator
         initialRouteName="Login"
         screenOptions={{
             headerStyle:{ backgroundColor: '#8000FF' },
             headerTitleStyle: { color: '#ffffff' },
             headerTitle: 'おくすり手帳' ,
             headerTintColor: '#ffffff',
             headerBackTitle: 'Back',
             cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
             gestureEnabled: true,
             gestureDirection: 'horizontal',
         }}
         >
            <Stack.Screen name="DrugList" component={DrugListScreen} />
            <Stack.Screen
             name="Login"
             component={LoginScreen}
             options={{
                 cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
             }}
              />
            <Stack.Screen name="Read" component={ReadScreen} />
            <Stack.Screen
             name="SignUp"
              component={SignUpScreen}
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
              />
            <Stack.Screen name="Qr" component={QrScreen} />

        </Stack.Navigator>
        </NavigationContainer>
        );
}
