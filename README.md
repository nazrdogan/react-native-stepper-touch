# react-native-stepper-touch

### Usage

```javascript
export default class App extends Component{
  state={
    value:0,
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
                  this.setState({
                      value: sign === false ? this.state.value - 1 : this.state.value + 1,
                  })
              }
          />
      </View>
    );
  }
}
```
![](react-native-stepper-touch/example/Feb-23-2019 00-16-49.gif)
 
      
 
