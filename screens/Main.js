import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
});

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onPressHandler = () => {
    this.props.navigation.navigate('DogGallery');
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(email) => this.setState({ email })}
            keyboardType='email-address'
            placeholder='Email'
          />
          <TextInput
            style={styles.input}
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry
            placeholder='Password'
          />
          <Button
            title='Sign in'
            onPress={this.onPressHandler}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
};