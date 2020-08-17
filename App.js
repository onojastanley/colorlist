import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
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
           <TouchableHighlight style={styles.button}
          onPress={() => this.changeColor('yellow')}
          underlayColor="orange">

          <View style={styles.row}>
            <View style={[
              styles.sample,
              { backgroundColor: 'yellow'}
            ]} />
            <Text style={styles.text}>yellow</Text>
          </View>

        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          onPress={() => this.changeColor('red')}
          underlayColor="orange">

          <View style={styles.row}>
            <View style={[
              styles.sample,
              { backgroundColor: 'red'}
            ]} />
            <Text style={styles.text}>red</Text>
          </View>

        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
          onPress={() => this.changeColor('green')}
          underlayColor="orange">

          <View style={styles.row}>
            <View style={[
              styles.sample,
              { backgroundColor: 'green'}
            ]} />
            <Text style={styles.text}>green</Text>
          </View>

        </TouchableHighlight>

        
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
      textAlign: 'center',
      backgroundColor: 'rgba(255,255,255,.8)'
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    sample: {
      height: 20,
      width: 20,
      borderRadius: 10,
      margin: 5,
      backgroundColor: 'white'
    },
    text: {
      fontSize: 30,
      margin: 5
    }
  }


);


export default App;
