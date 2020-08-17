import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView
} from 'react-native'

import ColorButton from './components/colorButton'

class App extends Component {

  constructor() {
    super()
    this.state = {
      backgroundColor: 'yellow'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  render() {
    const { backgroundColor } = this.state
    return (
      <ScrollView style={[styles.container,{backgroundColor}]}>
        <ColorButton backgroundColor="red"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="blue"
          onSelect={this.changeColor} />
        <ColorButton backgroundColor="green"
          onSelect={this.changeColor} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})

export default App;