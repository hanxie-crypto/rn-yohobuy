

var React = require('react-native');
var Dimensions = require('Dimensions');
//var KeyboardEvents = require('react-native-keyboardevents');
//var KeyboardEventEmitter = KeyboardEvents.Emitter;


var {
  PixelRatio
} = React;


var Util = {

  //单位像素比
  pixel: 1 / PixelRatio.get(),
  //屏幕尺寸
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  //post请求
  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
    .then((response) => response.text())
    .then((responseText) => {
      callback(JSON.parse(responseText));
    });
  },
  get: function (url, data, callback) {
    fetch(url)
    .then((response) => response.text())
    .then((responseText) => {
      callback(JSON.parse(responseText));
    });
  },
  //Key
  key: ''

};



module.exports = Util;