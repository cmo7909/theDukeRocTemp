import React, { useRef, useCallback } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',     // Full width of the parent container
  height: '400px',   // Fixed height, but you can adjust as needed
  maxWidth: '600px', // Max width to prevent it from becoming too wide
  minWidth: '300px', // Min width to prevent it from becoming too narrow
  margin: '0 auto',  // Center the container
  padding: '10px',   // Add padding around the map container
  boxSizing: 'border-box', // Include padding in the width calculation
};

const center = {
  lat: 43.1577,  
  lng: -77.6055, 
};

const mapId = 'a1445b9cb383f2eb';

const libraries = ['places', 'marker'];

const Map = () => {
  const mapRef = useRef(null);

  const addAdvancedMarker = useCallback(() => {
    if (mapRef.current && window.google && window.google.maps && window.google.maps.marker) {
      const { AdvancedMarkerElement } = window.google.maps.marker;

      const marker = new AdvancedMarkerElement({
        map: mapRef.current,
        position: center,
        title: "The Duke Event Space",
      });

      console.log('Advanced Marker loaded:', marker);
    } else {
      console.error('Google Maps API not fully loaded or marker library missing.');
    }
  }, []);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    addAdvancedMarker();
  }, [addAdvancedMarker]);

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={libraries} 
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onMapLoad}
        options={{
          mapId: mapId,
        }}
      />
    </LoadScript>
  );
};

export default Map;










