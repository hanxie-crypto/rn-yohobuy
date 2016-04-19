'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import Playground from '../components/playground';
import LayoutAnimate from '../components/layoutanimate';
import TabBarIos from '../components/tabbar.ios';
import SplashScreen from '../components/splashscreen';
import WebView from '../components/webview';
import DrawerView from '../components/drawer';
import * as counterActions from '../actions/counterActions';
import * as animateActions from '../actions/animateActions';
import * as tabbarActions from '../actions/tabbarActions';
import * as splashScreenActions from '../actions/splashScreenActions';
import * as webviewActions from '../actions/webviewActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class YoHoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;
    
    return (
      <DrawerView {...bindActionCreators(webviewActions, dispatch)} state={state}/>
    );
  }
}

export default connect(state => ({
  state: state
}))(YoHoApp);
