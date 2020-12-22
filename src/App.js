import React, { useState, useEffect } from 'react';
import { MapContainer, Tooltip, useMap, CircleMarker, useMapEvents, TileLayer, Marker, Popup } from 'react-leaflet'
import "./App.css";

function App() {
  const url = `https://api.mapbox.com/styles/v1/themiserablemap/ckiz2m91u7at619rpd9trm2xd/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_API_KEY}`;
  const [userLocation, setUserLocation] = useState(null);

  const SetCenterToLocation = () => {
    const map = useMap();
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setUserLocation({ lat: lat, lng: lng });
        map.setView([lat, lng], 6);
      });
    }
    return null;
  }

  return (
    <div style={{display: "flex", flex: 1}}>
      <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={6} scrollWheelZoom={true}>
         <TileLayer url={url}/>
         <SetCenterToLocation/>
      </MapContainer>  
    </div>
  );
}

export default App;
