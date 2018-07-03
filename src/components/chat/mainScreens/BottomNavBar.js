import React, {Component} from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class BottomNavBar extends Component {
  state = {
    btnSelected: 3,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reset !== this.props.reset) {
      if (this.props.reset) this.setState({btnSelected: 3})
    }
  }

  render() {
    return (
      <View style={styles.navBar}>
        <TouchableOpacity
          style={(this.state.btnSelected === 1)
          ? styles.btnSelected
          : styles.notSelected}
          onPress={() => {
            this.props.displayAccountInfo()
            this.setState({btnSelected: 1})
          }}
        >
          <Icon name="user-circle" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={(this.state.btnSelected === 2)
          ? styles.btnSelected
          : styles.notSelected}
          onPress={() => {
            this.props.displayContacts()
            this.setState({btnSelected: 2})
          }}
        >
          <Icon name="address-book" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={(this.state.btnSelected === 3)
          ? styles.btnSelected
          : styles.notSelected}
          onPress={() => {
            this.props.displayChats()
            this.setState({btnSelected: 3})
          }}
        >
          <Icon name="comments" size={24} color="white" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#20AAB2',
    height: 50
  },
  edges: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  btnSelected: {
    backgroundColor: '#AEE8C3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  notSelected: {
    borderColor: '#20AAB2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
})

export default BottomNavBar