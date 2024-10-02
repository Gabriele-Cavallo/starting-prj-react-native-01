import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText])
  };

  return (
    <View style={styles.appContainer}>
      {/* <Text style={{margin: 16, borderWidth: 1, borderColor: 'red', padding: 16}}>Hello World!</Text>
      <Button title='Tap me!' />
      <TextInput style={styles.input} /> */}
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder='Your course goal!' />
        <Button onPress={addGoalHandler} title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => 
        // Aggiungo una nuova view per la visualizazione IOS che non accetta il border radius del tag Text
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // input: {
  //   margin: 16, 
  //   borderWidth: 1, 
  //   backgroundColor: 'yellowgreen', 
  //   borderStyle: 'dashed'
  // }
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
