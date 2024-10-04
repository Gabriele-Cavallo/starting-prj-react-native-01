import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({text, onDeleteItem, id}) {
    return (
        <Pressable 
            android_ripple={{color: '#dddddd'}} 
            onPress={onDeleteItem.bind(this, id)}
            style={({pressed}) => pressed && styles.pressedItem}
        >
            <View  style={styles.goalItem}>
                <Text style={styles.goalText}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
       opacity: 0.5 
    },
    goalText: {
        color: 'white'
    }
});