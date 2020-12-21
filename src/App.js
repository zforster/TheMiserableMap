import React, { useState, useEffect } from 'react';
import { MapContainer, useMapEvents, TileLayer, Marker, Popup } from 'react-leaflet'
import "./App.css"

function App() {
  const url = `https://api.mapbox.com/styles/v1/themiserablemap/ckiz2m91u7at619rpd9trm2xd/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_API_KEY}`
  
  return (
    <MapContainer
    center={{ lat: 51.505, lng: -0.09 }}
    zoom={6}
    scrollWheelZoom={true}>
    <TileLayer
      url={url}
    />
  </MapContainer>
  );
}

export default App;
