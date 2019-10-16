import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import config from '../../config'

const mapStyles = {
    width: '350px',
    height: '350px',
};

export class MapContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };

    render() {
        return (
            <div className='map'>
                <Map
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{
                        // lat: 38.8397,
                        // lng: -77.0894
                        lat: 39.3096,
                        lng: -77.4566,
                    }}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Dog Day Care'}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <p>{this.state.selectedPlace.name}</p>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: `${config.GOOGLE_MAP_KEY}`,
  })(MapContainer);