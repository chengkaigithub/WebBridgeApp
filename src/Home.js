/**
 * Create by chengkai on 2018/8/17.
 * Describe:
 */

import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import CommonWebView from "./CommonWebView";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    url: '',
  }

  openNewWebView = () => {
    let url = this.state.url;
    if (url && url.toLowerCase().startsWith("http")) {
      this.props.navigation.push('CommonWebView', { url });
    } else {
      this.showAlert('请输入正确的URL(包含http或https)');
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

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputStyle} onChangeText={this.onUrlChange}
                   placeholder='please input url...'
        />
        <TouchableOpacity onPress={this.openNewWebView}>
          <Text style={styles.btnStyle}>open new WebView</Text>
        </TouchableOpacity>
      </View>
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
    height: 30,
    backgroundColor: '#fff'
  }
});