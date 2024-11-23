// import React, { Component } from 'react';
// import { GoogleApiWrapper, Map, InfoWindow, Marker, IMapProps, IInfoWindowProps } from 'google-maps-react';

// // Define interfaces for props
// interface MapContainerProps {
//   google: any;
// }

// // Define custom interfaces for Map and InfoWindow props
// interface CustomMapProps extends IMapProps {
//   children?: React.ReactNode;
// }

// interface CustomInfoWindowProps extends IInfoWindowProps {
//   children?: React.ReactNode;
// }

// interface MapContainerState {
//   showingInfoWindow: boolean;
//   activeMarker: any;
//   selectedPlace: {
//     name?: string;
//     [key: string]: any;
//   };
// }

// class MapContainer extends Component<MapContainerProps, MapContainerState> {
//   state: MapContainerState = {
//     showingInfoWindow: false,
//     activeMarker: null,
//     selectedPlace: {},
//   };

//   onMarkerClick = (props: any, marker: any) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true,
//     });
//   };

//   onMapClicked = () => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null,
//       });
//     }
//   };

//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         onClick={this.onMapClicked}
//         style={{ width: '100%', height: '100%' }}
//         initialCenter={{
//           lat: 40.7128,
//           lng: -74.0060,
//         }}
//         zoom={14}
//       >
//         <Marker
//           onClick={this.onMarkerClick}
//           // name={'Current location'}
//         />

//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={() => {
//             this.setState({
//               showingInfoWindow: false,
//               activeMarker: null
//             });
//           }}
//         >
//           <div>
//             <h1>{this.state.selectedPlace.name}</h1>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE'
// })(MapContainer as any);