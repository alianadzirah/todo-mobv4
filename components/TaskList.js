import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function TaskList(props) {

  return (
    <View style={styles.taskBody}>
      <View style={styles.itemLeft}>

        <View style={styles.buttonDisplay}>
          <Pressable style={styles.tickBox}></Pressable>
          <Text style={styles.taskTitle}>{props.text}</Text>
        </View>

        <View style={styles.buttonDisplay}>
          <Pressable>
          <Ionicons name="create" margin={5} size={30} color="darksalmon" />
          </Pressable>
          <Pressable onPress={props.onDeleteTask}>
          <Ionicons name="trash-bin" margin={5} size={30} color="indianred" />
          </Pressable>
        </View>

      </View>

      
    </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  taskBody: {
    width: "90%",
    backgroundColor: "#ffdddd",
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 20,
    elevation: 5,
  },
  taskTitle: {
    fontSize: 18,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tickBox: {
    backgroundColor: "#ffaaaa",
    width: 30,
    height: 30,
    margin: 10,
  },
  buttonDisplay: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle:{
    alignItems: 'center',
    color: '#ffaaaa'
  }
});
