/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import StepperTouch from './stepper';
export default class App extends Component{
  state={
    value:0,
    value1:0,
  };
  render() {
    return (
      <View style={styles.container}>
          <StepperTouch
              value={this.state.value}
              disabled={false}
              containerStyle={{backgroundColor:"#FF5722"}}
              signTextStyle={{fontSize:22}}
              circleTextStyle={{color:"#FF5722"}}
              innerContainerStyle={{paddingHorizontal:4}}
              radius={35}
              onValueChange={sign =>
              {
                  this.setState({
                      value: sign === false ? this.state.value - 1 : this.state.value + 1,
                  })
              }}
          />
           <StepperTouch
              value={this.state.value1}
              disabled={false}
              containerStyle={{ marginTop:20,  backgroundColor:"#FF5722"}}
              signTextStyle={{fontSize:22}}
              circleTextStyle={{color:"#FF5722"}}
              innerContainerStyle={{paddingHorizontal:4}}
              radius={35}
              onValueChange={sign =>
              {
                  this.setState({
                      value1: sign === false ? this.state.value1 - 1 : this.state.value1 + 1,
                  })
              }}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E0E0E0'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
