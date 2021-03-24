import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

// import the background image for start screen
const image = require('../assets/Background_Image.png');

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: ''
    };
  }

  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
        <View style={{
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          }}
          >
          <Text style={styles.title}>ChatterBox</Text>
          <View style={styles.mainContainer}>
            <Text style={styles.text}>Please Enter Your Name:</Text>

            
            <TextInput
              style={{
                height: 40,
                color: '#757083',
                borderColor: 'lightgray', 
                borderWidth: 1, 
                borderRadius: 10, 
                width: 250, 
                padding: 10, 
                margin: 15,
                fontSize: 16,
                fontWeight: '300',
                }}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
              placeholder='Your Name'
              placeholderTextColor='#757083'
            />

            
            <Text style={styles.text}>Choose Background Color:</Text>
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.circle1}
                  onPress={() => {this.setState({color: '#090C08'})}}
                >
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.circle2}
                  onPress={() => {this.setState({color: '#474056'})}}
                >
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.circle3}
                  onPress={() => {this.setState({color: '#8A95A5'})}}
                >
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.circle4}
                  onPress={() => {this.setState({color: '#B9C6AE'})}}
                >
                </TouchableOpacity>
              </View>

          
              <TouchableOpacity
              style={styles.chatBtn}
              title="Start Chatting"
              onPress={() => this.props.navigation.navigate('Chat', {name: this.state.name, color: this.state.color })}
              >
                <Text style={styles.chatBtnTxt}>
                  Start Chatting
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 200,
    margin: 10
  },
  mainContainer: {
    flexDirection: 'column',
    position: 'relative',
    marginTop: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '88%',
    borderRadius: 30,
    paddingTop: 20,
    paddingBottom: 20,
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1
  },
  title: {
    fontSize: 45,
    color: '#FFFFFF',
    fontVariant: ['small-caps'],
    fontWeight: '600',
    letterSpacing: 3,
    marginBottom: 10,
    marginTop: 10
  },
  text: {
    fontWeight: '300', 
    fontSize: 16,
    color: '#757083'
  },
  circle1: {
    flex: 1,
    backgroundColor: '#090C08',
    height: 50,
    borderRadius: 25,
    right: 25
  },
  circle2: {
    flex: 1,
    backgroundColor: '#474056',
    borderRadius: 25,
    right: 10
  },
  circle3: {
    flex: 1,
    backgroundColor: '#8A95A5',
    borderRadius: 25,
    left: 5
  },
  circle4: {
    flex: 1,
    backgroundColor: '#B9C6AE',
    borderRadius: 25,
    left: 20
  },
  chatBtn: {
    backgroundColor: '#757083',
    width: '88%',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 1,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  chatBtnTxt: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    padding: 20,
    textAlign: 'center',
  }
});