import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Home from './Screens/Home';


export default function App() {
  const Stack=createStackNavigator()
  return (
    <>
    <StatusBar style="auto" />
   
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  
    </>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
