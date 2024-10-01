import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{margin: 16, borderWidth: 1, borderColor: 'red', padding: 16}}>Hello World!</Text>
      <Button title='Tap me!' />
      <TextInput style={styles.input} />
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
  input: {
    margin: 16, 
    borderWidth: 1, 
    backgroundColor: 'yellowgreen', 
    borderStyle: 'dashed'
  }
});
