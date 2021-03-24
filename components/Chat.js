import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Chat extends React.Component {
  render() {
    const { name, color } = this.props.route.params;

    this.props.navigation.setOptions({ title: name });

    const styles = StyleSheet.create({
      container: {
        backgroundColor: color,
        flex: 1,
      },
      text: {
        flex: 1,
        color: '#FFFFFF',
        textAlign: 'center',
      }
    });

    return (
      <View style={styles.container}>
        <Text 
        style={styles.text}>Hello!</Text>
      </View >
    );
  }
}