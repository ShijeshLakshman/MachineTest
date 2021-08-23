import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import EmployeesList from './screens/EmployeesList';
import EmployeesDetails from './screens/EmployeesDetails';

const Stack = createStackNavigator();

function App() {
  useEffect(async () => {
    fetch('http://www.mocky.io/v2/5d565297300000680030a986')
      .then(res => res.json())
      .then(res => {
        console.log('response:', res);
        AsyncStorage.setItem('employeeArray', JSON.stringify(res));
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="EmployeesList" component={EmployeesList} />
        <Stack.Screen name="EmployeesDetails" component={EmployeesDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
