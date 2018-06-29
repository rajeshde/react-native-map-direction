import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Polyline from '@mapbox/polyline';
class MapViewer extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data:{
        startLat: 0,
        startLon: 0,
        endLat: 0,
        endLon: 0
      },
      coords: [],
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      geoCode: {},
      screenDimension: {},
      pinColors: {},
      polyline: {},
    }
  }
  componentDidMount() {
    this.setState({ geoCode: this.props.geoCode,
      screenDimension: this.props.screenDimension,
      pinColors: this.props.pinColors,
      polyline: this.props.polyline
    });
    this.getDirections(this.props.geoCode.startLoc, this.props.geoCode.destinationLoc)
  }
  async getDirections(startLoc, destinationLoc) {
    try {
        let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc.lat }, ${ startLoc.lon }&destination=${ destinationLoc.lat }, ${ destinationLoc.lon }`)
        let respJson = await resp.json();
        let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
        let latitudeDeltaMin = 90;
        let latitudeDeltaMax = -90;
        let longitudeDeltaMin = 180;
        let longitudeDeltaMax = -180;
        let coords = points.map((point, index) => {
          if(index == 0) {
            this.setState({
              ...this.state,
              data : {
                ...this.state.data,
                startLat: point[0],
                startLon: point[1]
              }
            });
          }
          if(index == (points.length - 1))
          {
            this.setState({
              ...this.state,
              data : {
                ...this.state.data,
                endLat: point[0],
                endLon: point[1]
              }
            });
          }
          latitudeDeltaMin = Math.min(latitudeDeltaMin, point[0]);
          latitudeDeltaMax = Math.max(latitudeDeltaMax, point[0]);
          longitudeDeltaMin = Math.min(longitudeDeltaMin, point[1]);
          longitudeDeltaMax = Math.max(longitudeDeltaMax, point[1]);
          return  {
              latitude : point[0],
              longitude : point[1]
          }
        })
        let latitudeDelta = Math.abs(latitudeDeltaMax - latitudeDeltaMin );
        let longitudeDelta = Math.abs(longitudeDeltaMax - longitudeDeltaMin);
        let latCenter = (latitudeDeltaMax + latitudeDeltaMin) / 2;
        let lonCenter = (longitudeDeltaMax + longitudeDeltaMin) /2;
        this.setState({
          coords: coords,
          region: {
            latitude: latCenter,
            longitude: lonCenter,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta
          }
        });
        return coords
    } catch(error) {
        alert(error)
        return error
    }
  }
  render() {
    return (
      <View>
        <MapView style={[styles.map,
          {width: this.state.screenDimension.width,
          height: this.state.screenDimension.height}]}
          region = {
            this.state.region
          }
          mapPadding = {{
            top: 48,
            right: 25,
            bottom: 10,
            left: 25
          }}
          provider = { PROVIDER_GOOGLE }
          loadingEnabled = {true}
          loadingIndicatorColor = {"#62BDBD"}
        >
          <MapView.Polyline 
            coordinates={this.state.coords}
            strokeWidth={this.state.polyline.strokeWidth}
            strokeColor={this.state.polyline.strokeColor}
          />
          <MapView.Marker   //Marker For Start
            coordinate={{latitude: Number(this.state.data.startLat), longitude: Number(this.state.data.startLon)}}
            pinColor = {this.state.pinColors.start}
          />   
          <MapView.Marker   //Marker For End
            coordinate={{latitude: Number(this.state.data.endLat), longitude: Number(this.state.data.endLon)}}
            pinColor = {this.state.pinColors.destination}
          />       
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default MapViewer;