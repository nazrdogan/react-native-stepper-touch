import * as React from 'react';
import {Text, View, Animated, PanResponder,TouchableWithoutFeedback } from 'react-native';
export default class StepperTouch extends React.Component {
    static defaultProps = {
        radius: 40
    };
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
        };
        this.state.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gestureState) =>
                Math.abs(gestureState.dx) > this.props.radius
                    ? null
                    : Animated.event([null, { dx: this.state.pan.x }])(e, gestureState),

            onPanResponderRelease: (e, { vx, dx }) => {
                console.log(vx, dx);
                if (dx > this.props.radius) {
                    this.props.onValueChange(true);
                }
                if (dx < -this.props.radius) {
                    this.props.onValueChange(false);
                }
                Animated.spring(this.state.pan, {
                    toValue: 0,
                }).start();
            },
        });
    }
    getCircleStyle(){
        return[
            {
                width: this.props.radius,
                height: this.props.radius,
                backgroundColor: 'white',
                borderRadius: this.props.radius / 2,
                alignItems: 'center',
                justifyContent: 'center'},this.props.circleStyle,this.state.pan.getLayout()]
    }
    getCircleTextStyle(){
        return[
            {fontSize: this.props.radius / 2,color:"#2196F3"},
            this.props.circleTextStyle
        ]
    }
    getContainerViewStyle(){
        return  [
            {
                width: this.props.radius * 2.5,
                height: this.props.radius,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#2196F3',
                borderRadius: this.props.radius / 2,
            },
            this.props.containerStyle
        ]
    }
    getInnerContainerView(){
        return [
            {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                paddingHorizontal: 8,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row'
            }, this.props.innerContainerStyle
        ]
    }
    getSignTextStyle(){
        return[
            {
                fontSize: this.props.radius / 3, color: 'white'
            },
            this.props.signTextStyle
        ]
    }
    render() {
        return <View
            pointerEvents={this.props.disabled  === true ? "none": "auto"}
            overflow={"hidden"}
            style={this.getContainerViewStyle()}>
            <View
                style={this.getInnerContainerView()}>
                <Text style={this.getSignTextStyle()}>
                    -
                </Text>
                <Text style={this.getSignTextStyle()}>
                    +
                </Text>
            </View>
            <Animated.View
                {...this.state.panResponder.panHandlers}
                style={[this.getCircleStyle()]}>
                <Text style={this.getCircleTextStyle()}>
                    {this.props.value}
                </Text>
            </Animated.View>

        </View>;
    }
}
