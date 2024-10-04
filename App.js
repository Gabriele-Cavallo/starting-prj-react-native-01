import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
    ])
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id );
    });
  }

  return (
    <View style={styles.appContainer}>
      {/* <Text style={{margin: 16, borderWidth: 1, borderColor: 'red', padding: 16}}>Hello World!</Text>
      <Button title='Tap me!' />
      <TextInput style={styles.input} /> */}
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => 
          // Aggiungo una nuova view per la visualizazione IOS che non accetta il border radius del tag Text
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>)}
        </ScrollView> */}
        <FlatList data={courseGoals} renderItem={itemData => {
          return (
            <GoalItem 
              onDeleteItem={deleteGoalHandler} 
              text={itemData.item.text} 
              id={itemData.item.id}
            />
          )
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false} />
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
  goalsContainer: {
    flex: 5
  },
  
});
