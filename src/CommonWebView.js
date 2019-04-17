import React, { Component } from 'react';
import { WebView, StyleSheet, Text } from 'react-native';

/**
 * 通用WebView(可层级返回)
 * @author chengkai
 * 官网: https://reactnative.cn/docs/webview/#injectjavascript
 */
export default class CommonWebView extends Component {

  static navigationOptions = ({ navigation: { state } }) => ({
    title: state.params.title || '',
    headerLeft: <Text style={styles.headerLeftBtnStyle} onPress={() => {
      !!state.params && state.params.onBackPage();
    }}>返回</Text>,
  });

  state = {
    canGoBack: false,
  }

  componentDidMount() {
    const { navigation: { setParams } } = this.props;
    setParams({
      onBackPage: this.onBackPage,
    });
  }

  onBackPage = () => {
    if (this.state.canGoBack) {
      this.mWebView.goBack();
    } else {
      this.props.navigation.goBack();
    }
  }

  onShouldStartLoadWithRequest = (event) => {
    this.setState({ canGoBack: event.canGoBack });
    return true;
  };

  handlerOnNavigationStateChange = (navState) => {
    navState.title && this.props.navigation.setParams({
      title: navState.title,
    });
    this.setState({ canGoBack: navState.canGoBack });
  }

  /**
   * 加载开始
   */
  onLoadStart = () => {
    // showLoading();
  }

  /**
   * 加载结束
   */
  onLoadEnd = () => {
    // hideToast();
  }

  /**
   * 加载成功
   */
  onLoadSuccess = () => {

  }

  /**
   * 加载失败
   */
  onError = () => {

  }

  onLoadErrorClick = () => {
    this.mWebView.reload();
  }

  renderErrorView = () => {
    return (
      <Text style={styles.errorViewText} onPress={this.onLoadErrorClick}>加载粗错了!!!</Text>
    )
  }

  getUrlFromParams = () => {
    let url = "";
    try {
      url = this.props.navigation.state.params.url;
    } catch (e) {
    }
    return url;
  }

  render() {
    let url = this.getUrlFromParams();
    return (
      <WebView
        ref={ref => this.mWebView = ref}
        automaticallyAdjustContentInsets={false}
        style={styles.webViewStyle}
        source={{ uri: url }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        onNavigationStateChange={this.handlerOnNavigationStateChange}
        startInLoadingState={true}
        scalesPageToFit={true}
        onLoadStart={this.onLoadStart}
        onLoadEnd={this.onLoadEnd}
        onLoad={this.onLoadSuccess}
        onError={this.onError}
        renderError={this.renderErrorView}
      />
    );
  }
}

const styles = StyleSheet.create({
  webViewStyle: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
  errorViewText: {
    color: "#fff",
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30
  },
  headerLeftBtnStyle: {
    marginLeft: 10
  }
})