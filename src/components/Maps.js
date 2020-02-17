import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

const SimpleMap = (props) => {
    const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={-24.652390}
            lng={25.904141}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;