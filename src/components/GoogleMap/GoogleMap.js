import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

export default function Map() {
  const [selected, setSelected] = useState(null);

  const coords = {
    center: {
      lat: 40.301830,
      lng: -105.072570
    },
    zoom: 15
  };

  return (
    <GoogleMap
      defaultZoom={coords.zoom}
      defaultCenter={{ lat: coords.center.lat, lng: coords.center.lng }}
    >
      <Marker
        position={{ lat: coords.center.lat, lng: coords.center.lng }}
        onClick={function () {
          setSelected('selected');
        }}
      />
      {selected && (
        <InfoWindow
          position={{ lat: coords.center.lat, lng: coords.center.lng }}
          onCloseClick={function () {
            setSelected(null);
          }}
        >
          <div>
            <h3>Mike Patrick Law Office</h3>
            <span>Personal Injury & Workers Comp Attorney</span>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
