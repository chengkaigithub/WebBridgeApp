/**
 * Create by chengkai on 2018/8/17.
 * Describe:
 */

import { createStackNavigator } from "react-navigation";
import Home from "./Home";
import CommonWebView from "./CommonWebView";
import { Easing, Animated } from 'react-native';

export default createStackNavigator({
  Home,
  CommonWebView
}, {
  headerMode: 'screen',
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: true,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateY }] };
    },
  }),
});
