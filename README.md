# react-native-map-direction
This open source library have few applications using Google Maps API.

## MapViewer: 
Display direction between two geolocation.

## Installation: 
``` npm i react-native-map-direction --save ```

## General Usage:
import MapViewer from ‘react-native-map-direction’;

## API KEY:

Go to https://developers.google.com/maps/documentation/ios-sdk/get-api-key  <br /> and  <br /> https://developers.google.com/maps/documentation/android-api/signup to get your keys for both iOS and Android.

Make sure that Google Maps Android API and Google Maps SDK for iOS are enabled for the current project. <br /> 

https://console.developers.google.com/apis/library/maps-android-backend.googleapis.com/ <br /> 
https://console.developers.google.com/apis/library/maps-ios-backend.googleapis.com

Without an API key the Google Maps map won't render anything.


## Where to ADD API KEY:
Add your API key to your manifest file in  <br /> 
“ android/app/src/main/AndroidManifest.xml “ <br />

You will only need to add this meta-data tag, but make sure it's a child of application<br /> 
<application &nbsp; > <br />
 <meta-data <br />
&nbsp; &nbsp;   android:name="com.google.android.geo.API_KEY" <br />
&nbsp; &nbsp;    android:value="YOUR_API_KEY_HERE"/> <br />
</application &nbsp; >


## Issues:
If there are any Map related issues  and Gradle, then follow this link :

https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395


## Customizable Features: 
- ###### Polyline: Color and Width
- ###### Marker: Color
- ###### View: height and width

## Dependencies Used:
- ‘react-native-maps’
- ‘@mapbox/polyline’

## Usage:

import MapViewer from 'react-native-map-direction'; <br /> 
class MapComponent extends Component { <br /> 
&nbsp;   constructor(props) { <br /> 
 &nbsp;    super(props); <br /> 
&nbsp;     this.state = { <br /> 
&nbsp;       geoCode: { <br /> 
&nbsp; &nbsp;         startLoc: { <br /> 
&nbsp; &nbsp; &nbsp;   lat: 8.192738, <br /> 
&nbsp; &nbsp; &nbsp;             lon: -77.714723 <br /> 
&nbsp; &nbsp;         }, <br /> 
&nbsp; &nbsp;         destinationLoc: { <br /> 
&nbsp; &nbsp; &nbsp;     lat: 70.196917 <br /> 
&nbsp; &nbsp; &nbsp;     lon: -148.419491 <br /> 
&nbsp; &nbsp; } <br />  
&nbsp;       },
 &nbsp;      screenDimension: {  <br /> 
 &nbsp; &nbsp;        width: Dimensions.get('window').width,  // width <br /> 
 &nbsp; &nbsp;        height: Dimensions.get('window').height	//height <br /> 
&nbsp;       }, <br /> 
&nbsp;       pinColors: { <br /> 
&nbsp; &nbsp;         start: 'green', <br /> 
&nbsp; &nbsp;         destination: 'red' <br /> 
&nbsp;       }, <br /> 
&nbsp;       polyline: { <br /> 
&nbsp; &nbsp;         strokeColor: 'navy', <br /> 
&nbsp; &nbsp;         strokeWidth: 4 <br /> 
&nbsp;       } <br /> 
 &nbsp;    } <br /> 
 &nbsp;  } <br /> 
 &nbsp;  render() { <br /> 
 &nbsp; &nbsp;    return (
 &nbsp; &nbsp; &nbsp;        <MapViewer <br />  
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;        geoCode={this.state.geoCode}  <br /> 
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;        screenDimension={this.state.screenDimension} <br /> 
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;        pinColors={this.state.pinColors} <br /> 
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;        polyline={this.state.polyline} <br /> 
 &nbsp; &nbsp; &nbsp;       /> <br /> 
 &nbsp; &nbsp;    ) <br /> 
 &nbsp;  }; <br /> 
} <br /> 
export default MapComponent; <br /> 

## <MapViewer /> Component API:

###### Props


| Props                    |            Type                  |                          Note
|:---:|:---:|:---:
| geoCode|geoCode: { <br /> &nbsp; startLoc: { <br /> &nbsp; &nbsp; lat: Number,<br /> &nbsp; &nbsp; lon: Number <br /> &nbsp; }, &nbsp; <br /> destinationLoc: { <br /> &nbsp; &nbsp; lat: Number, <br />  &nbsp; &nbsp; lon: Number &nbsp; <br />  } <br />  }| The start and destination geolocation in terms of latitude and longitude.
| screenDimension|screenDimension: {  <br />  &nbsp; width: Number, <br />  &nbsp;  height: Number <br /> }|Height and width of the view in which the Map will be shown
| pinColors|pinColors: { <br />   &nbsp; start: ‘color_name’, <br />   &nbsp;  destination: ‘color_name’  &nbsp; }|Colors for start and destination marker
| polyline|polyline: {  <br />  &nbsp; strokeColor: ‘color_name’,  <br />  &nbsp;  strokeWidth: Number  &nbsp;    }|        Color and line width for the polyline
