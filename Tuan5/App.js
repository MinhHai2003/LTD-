import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './components/screen01'; 
import Screen2 from './components/screen2';   
import Screen3 from './components/screen3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screen01">
        {/* Màn hình đầu tiên */}
        <Stack.Screen name="screen01" component={Screen01} options={{ title: 'Ban đầu ' }} />
        {/* Màn hình thứ hai */}
        <Stack.Screen name="screen2" component={Screen2} options={{ title: 'Chọn màu' }} />
        {/* Màn hình thứ ba */}
        <Stack.Screen name="screen3" component={Screen3} options={{ title: 'Chọn màu xong' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
