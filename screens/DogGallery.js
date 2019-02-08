import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 10,
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
  image: {
    marginBottom: 10,
    height: 300,
  },
})

export class DogGallery extends Component {
  _ismounted = false;

  constructor(props) {
    super(props);
    this.state = {
      interval: 3000,
      image: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_10832.jpg',
    };
  }

  onPressHandler = () => {
    clearInterval(this.slideShow);
    this.props.navigation.navigate('Main');
  };

  onChangeHandle = (text) => {
    if (text === '') return;
    if (!isNaN(text) && !isNaN(parseInt(text))) {
      let interval = parseInt(text);
      if (interval > 60000) {
        alert('Very big interval');
        return;
      }
      if (this._ismounted) {
        this.setState({ interval });
      }
    }
    else alert('Enter a number');
  }

  componentDidUpdate() {
    const { interval } = this.state;
    clearInterval(this.slideShow);
    this.slideShow = setInterval(this.fetchImage, interval);
  }

  componentDidMount() {
    this._ismounted = true;
    const { interval } = this.state;
    this.slideShow = setInterval(this.fetchImage, interval);
  }

  componentWillUnmount() {
    clearInterval(this.slideShow);
    this._ismounted = false;
  }

  fetchImage = () => {
    fetch('https://dog.ceo/api/breed/mix/images/random')
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'success') {
          if (this._ismounted) {
            this.setState({ image: res.message });
          }
        } else throw new Error('not success request');
      })
      .catch(alert);
  };

  render() {
    const { image } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(interval) => this.onChangeHandle(interval)}
            placeholder="Enter interval that you'd like"
          />
          <Image
            resizeMode='contain'
            style={styles.image}
            source={{ uri: image }}
          />
          <Button
            style={styles.button}
            title='Exit'
            onPress={this.onPressHandler}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }

};

export default DogGallery;