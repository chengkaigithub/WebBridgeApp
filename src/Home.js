/**
 * Create by chengkai on 2018/8/17.
 * Describe:
 * 替换 antd-mobile 组件的样式
 * https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui#antd-mobile-with-rn-custom-ui
 */

import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import CommonWebView from "./CommonWebView";
import Toast from './toast/index.native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    url: '',
  }

  openNewWebView = () => {
    Keyboard.dismiss();
    let url = this.state.url;
    if (url && url.toLowerCase().startsWith("http")) {
      this.props.navigation.push('CommonWebView', { url });
    } else {
      Toast.show('请输入正确的URL(包含http或https)', 2, false);
      // this.showAlert('请输入正确的URL(包含http或https)');
    }
  }

  showAlert = (message) => {
    Alert.alert(
      '温馨提示',
      message,
      [
        { text: 'OK', onPress: () => {} },
      ],
      { cancelable: false }
    );
  }

  onUrlChange = (url) => {
    this.setState({ url });
  }

  testGitCommit = () => {
    // 测试 功能分支1提交数据
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TextInput style={styles.inputStyle} onChangeText={this.onUrlChange}
                     autoFocus={true} clearButtonMode={true} multiline={true}
                     placeholder='please input url...'
          />
          <TouchableOpacity onPress={this.openNewWebView}>
            <Text style={styles.btnStyle}>open new WebView</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  btnStyle: {
    width: 200,
    height: 20,
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    marginTop: 10,
  },
  inputStyle: {
    margin: 20,
    width: 200,
    height: 100,
    backgroundColor: '#fff'
  }
});