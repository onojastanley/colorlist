import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
    backgroundColor:'yellow',

    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor})
  }

  render() {
    const backgroundColor = this.state.backgroundColor;
    return (
      <View style={[styles.container,{backgroundColor} ]}>
        <Text style={styles.button}
          onPress={() => this.changeColor('yellow')}>yellow</Text>
              <Text style={styles.button}
          onPress={() => this.changeColor('green')}>green</Text>
        <Text style={styles.button}
          onPress={() => this.changeColor('red')}>red</Text>
        
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      fontSize: 30,
      margin: 10,
      padding: 10,
      borderWidth: 2,
      borderRadius: 10,
      alignSelf: 'stretch',
      textAlign: 'center'
    }
  }


);


export default App;
