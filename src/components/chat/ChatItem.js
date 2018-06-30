import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

export default class ChatItem extends Component {
  state = {
    receiver: true,
    sender: true
  }
  render() {
    return (
      <View style={styles.container}>
        {this
          .props
          .messages
          .map(message => (
            <Text style={styles.sender} key={Object.keys(message)[0]}>
              {message[Object.keys(message)[0]].text}
            </Text>
          ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sender: {
    flex: 1,
    backgroundColor: "red",
    color: "#fff",
    padding: 5,
    margin: 5
  },
  receiver: {
    flex: 1,
    alignContent: "flex-end",
    backgroundColor: "blue",
    width: "100%"
  }
})
