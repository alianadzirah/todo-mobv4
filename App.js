import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import TaskList from "./components/TaskList";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [taskID, setTaskID] = useState(0);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addTaskHandler = () => {
    setTaskID(taskID + 1);
    setTaskItems([...taskItems, task]);
    setTask(null);
    console.log(task + "keynum: "+taskID);
  };

  const taskDone = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  
  const deleteTask = (index) => {
    setTaskItems((prevTaskItems) => {
      console.log("Prev task: "+ prevTaskItems)
      return prevTaskItems.filter((id) => index !== id)
    });
    //setTaskItems(taskItems.splice(index,1));
    console.log("Delete: " + index);
    console.log("Delete array: " + taskItems);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>To do list</Text>
      </View>
      {/* all task list here */}
      <View style={styles.items}>
        {taskItems.map((item, index) => {
          return <TaskList key={index} text={item} onDeleteTask={deleteTask.bind(this, index)}/>
        })}
      </View>

      <View style={styles.addNewTask}>
        <TextInput
          style={styles.newTask}
          placeholder={"Add new task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <Pressable onPress={addTaskHandler} style={styles.addButton}>
          <Ionicons name="add" size={50} color="white" />
        </Pressable>
      </View>

      {/* floating button to add task */}
      {/* <TouchableOpacity
        activeOpacity={0.7}
        onPress={clickHandler}
        style={styles.touchableOpacityStyle}
      >
        <View style={styles.floatingButtonStyle}>
          <Ionicons name="add" size={60} color="white" />
        </View>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  tasksWrapper: {
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 20,
  },

  sectionTitle: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
  },

  items: {
    height: "65%",
    alignContent: "center",
  },

  touchableOpacityStyle: {
    position: "absolute",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },

  floatingButtonStyle: {
    width: 70,
    height: 70,
    backgroundColor: "lightcoral",
    borderRadius: 100,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  newTask: {
    width: 280,
    borderRadius: 60,
    backgroundColor: "pink",
    margin: 20,
    paddingLeft: 20,
  },

  addButton: {
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: "pink",
    margin: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  addNewTask: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
