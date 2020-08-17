import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    backgroundColor:'yellow',

    };
  }

  render() {
    const backgroundColor = this.state.backgroundColor;
    return (
      <View style={[styles.container,{backgroundColor} ]}>
        <Text>Hello, worldyy!</Text>
        
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
    }
  }


);


export default App;
