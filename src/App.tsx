import React from 'react';
import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';

function App() {
  return (
    <div className="ts-box" style={{
      width: 500,
      height: 500
    }} >
      <MapContainer
        center={[25.0481279, 121.5139046]}
        zoom={15}
      >
        {/* <TileLayer
          url="https://wmts.nlsc.gov.tw/wmts/EMAP2/default/EPSG:3857/{z}/{y}/{x}"
        /> */}
        <TileLayer
          url="https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}@2x.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;
