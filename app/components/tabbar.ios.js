'use strict';

import React, {
  StyleSheet,
  Component,
  View,
  TabBarIOS,
  Text,
  ListView
} from 'react-native';

const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  }
});

export default class TabBarExample extends React.Component {
  constructor(props: any) {
    super(props);
  }
  _renderContent(color: string, pageText: string, num?: number) {
    let {timedata} = this.props.state.tabbar;
    if (timedata.length !==0){
      const resultView =  timedata.map((obj,key) =>{
            return <View key={key}>
                       <Text>{obj.starttime}</Text>
                   </View>
          });
      return   (
        <View style={[styles.tabContent, {backgroundColor: color,paddingTop:50}]}>
          {resultView}
        </View>
      )
    }else {
      return (
        <View style={[styles.tabContent, {backgroundColor: color}]}>
            <Text style={styles.tabText}>{pageText}</Text>
            <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
        </View>
     );
    }
    
  }
  _tabNav(type,action){
    action(type);
  }
  _tabNavAndGetData() {
    this.props.requestTime();
  }
  render() {
    const {tabnav} = this.props;
    const {tabbar} = this.props.state;
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Blue Tab"
          icon={{uri: base64Icon, scale: 3}}
          selected={tabbar.selectedTab === 'blueTab'}
          onPress={this._tabNav.bind(this,'blueTab',tabnav)}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          badge={tabbar.notifCount > 0 ? tabbar.notifCount : undefined}
          selected={tabbar.selectedTab === 'redTab'}
          onPress={this._tabNavAndGetData.bind(this,'redTab')}>
          {this._renderContent('#783E33', tabbar.message, tabbar.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: base64Icon, scale: 3}}
          title="More"
          selected={tabbar.selectedTab === 'greenTab'}
          onPress={this._tabNav.bind(this,'greenTab',tabnav)}>
          {this._renderContent('#21551C', 'Green Tab', 2)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}