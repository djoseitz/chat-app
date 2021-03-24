import React from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';

export default class Start extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Chatterbox</Text>
        <TextInput 
          style={styles.textBox}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder='Your name'
       />
        <Button
          title="Start chatting"
          onPress={() => this.props.navigation.navigate('Chat', 
          { name: this.state.name })}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create ({
  appTitle: {
    flex: 1,
    fontSize: 45,
    fontWeight: 600,
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBox: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 5
  },
})