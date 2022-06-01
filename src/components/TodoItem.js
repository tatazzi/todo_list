import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Animated,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {removeTodo} from '../reducers/todoSlice';

// const CheckBox = ({value, onValueChange}) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: value ? 0 : 1,
//     duration:200,
//       useNativeDriver: false,
//     }).start();
//   }, [value]);

//   const opacity = fadeAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 1],
//   });

//   return (
//     <TouchableOpacity
//       activeOpacity={0.8}
//       onPress={() => onValueChange(!value)}
//       style={checkboxStyle.wrapper}>
//       <Animated.Image
//         source={require('../check.png')}
//         resizeMode="contain"
//         style={{...checkboxStyle.image, opacity}}
//       />
//     </TouchableOpacity>
//   );
// };

// const checkboxStyle = StyleSheet.create({
//   wrapper: {
//     width: 36,
//     height: 36,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 20,
//     height: 16.5,
//   },
// });

const TodoItem = ({title, id}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(removeTodo(id));
  };

  return (
    <View style={styles.todoItem}>
      <CheckBox
        boxType="square"
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Text style={styles.todoText}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          deleteTask();
        }}
        style={styles.todoButton}>
        <Text style={styles.buttonText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  todoItem: {
    height: 52,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  todoText: {
    flex: 1,
    paddingLeft: 12,
    fontSize: 16,
  },
  todoButton: {
    backgroundColor: '#000',
    align: 'center',
    borderWidth: 1,
    padding: 8,
    height: 36,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});
export default TodoItem;
