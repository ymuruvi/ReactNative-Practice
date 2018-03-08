import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 5000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <View>
        <Text>{display}</Text>
      </View>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F44B42',
  }
});




