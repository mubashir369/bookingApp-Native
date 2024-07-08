import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { enableScreens } from 'react-native-screens';
enableScreens();


export default function App() {
  return (
    <>
    <StackNavigator/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center"
 
  },
});
