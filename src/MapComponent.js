import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import MapViewer from './MapViewer';
class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geoCode: {
        startLoc: {
            lat: 8.192738,
            lon: -77.714723
        },
        destinationLoc: {
            lat: 70.196917,
            lon: -148.419491
        }
      },
      screenDimension: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
      },
      pinColors: {
        start: 'green',
        destination: 'red'
      },
      polyline: {
        strokeColor: 'navy',
        strokeWidth: 4
      }
    }
  }
  render() {
    return (
        <MapViewer
        geoCode={this.state.geoCode}
        screenDimension={this.state.screenDimension}
        pinColors={this.state.pinColors}
        polyline={this.state.polyline}
      />
    )
  };
}
export default MapComponent;
