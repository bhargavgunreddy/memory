/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  MapView,
  ScrollView,
  View
} from 'react-native';

export default class FirstProject extends Component {
  

    constructor(props) {
      super(props);
      var self = this;
      
    }

    picDescription(item, index) {
      return (<Text key = {item + index} style = {styles.welcome}>{item}</Text>);
    }

    constructMemory(item, index) {
       
        return (
            <View key = {index} style={{margin:20, flex: 1, flexDirection: 'row', borderWidth:1}}>
              <Image source = { require('./rajni.jpg')} style = {styles.mypic}></Image>
              <ScrollView>
                {item.memoryInfo.map(this.picDescription)}
              </ScrollView>
            </View>
             
        );
    }


    render() {
      return (
      <View style={{flex: 3, backgroundColor: 'gray', borderWidth:1}}>
            {this.props.memories.map(this.constructMemory.bind(this))}
           <View style={{margin:20, flex: 1, flexDirection: 'row'}}>
            <MapView style={{width:150, height:150, flex:1, margin: 1, padding: 1}} 
            showsUserLocation = {true} showPointsOfInterest = {false}
             zoomEnabled={true}
            >
            </MapView>
            <MapView style={{width:150, height:150, flex:1, margin: 1, padding: 1}}
                region = {{
                  latitude: 17.35,
                  longitude: 78.38,
                  latitudeDelta: 0.15,
                  longitudeDelta: 0.18
                }}  showPointsOfInterest = {false} zoomEnabled = {true}>
            </MapView>
          </View>
      </View>
        
    );
  }
  
}

// FirstProject.propTypes = {
//   memories: React.PropTypes.arrayOf(
//                   React.PropTypes.shape({
//                       uri: React.PropTypes.string.isRequired,
//                       memoryInfo: React.PropTypes.array.isRequired,
//                   })
//             )
// };

FirstProject.defaultProps = {
  memories: [
              {
              "uri": "rajni.jpg",
              "memoryInfo": ["Pic of Rajni", "SuperStar", "10 Awards", "10 crores"]  
              },
              {
              "uri": "rajni.jpg",
              "memoryInfo": ["Pic of Rajni", "SuperStar", "10 Awards", "10 crores"]  
              },
              {
              "uri": "rajni.jpg",
              "memoryInfo": ["Pic of Rajni", "SuperStar", "10 Awards", "10 crores"]  
              }
            ]
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 2,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  mypic: {
    width: 150,
    height: 150,
  }
});

//// {this.props.memories.map(this.constructMemory)}

AppRegistry.registerComponent('FirstProject', () => FirstProject);
