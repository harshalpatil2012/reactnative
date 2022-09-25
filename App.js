import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Demo from './components/Demo';
import FlatListBasics from './components/FlatList';
import DisplayAnImage from './components/DemoImage';
import DemoState from './components/DemoState';
import FetchDemo from './components/FetchDemo';

export default function App() {
  const companies = ['Barclays', 'Google'];
  
  return (
    <View style={styles.container}>
      <DisplayAnImage />
      <Text>Welcome to App</Text> 
      <View>
        {companies.map((c,i)=>{return <Text key={i}>{c}</Text>})}
      </View>
      <Demo name="Chandrakant"/>
      <DemoState />
      <FlatListBasics />
      <FetchDemo />
    </View>
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


