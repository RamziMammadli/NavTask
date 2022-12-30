import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import UserDetail from './src/components/UserDetail';
import CreateUser from './src/components/CreateUser';
import UpdateScreen from './src/components/UpdateScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
        <Stack.Screen name="CreateUser" component={CreateUser} />
        <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
