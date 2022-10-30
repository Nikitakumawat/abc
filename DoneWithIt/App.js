import { StyleSheet, SafeAreaView, Button} from 'react-native';
// import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>hello</Text>
      <Button color={'orange'} title='click you' onPress={()=> {alert("button tapped")}}/>
    </SafeAreaView>
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
