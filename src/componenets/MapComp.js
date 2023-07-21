import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapComp.css'

const LeafletMap = ({bars}) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
    }
  }, []);

  
  return (
    <div className='leaflet-container'>
    <MapContainer ref={mapRef} center={[39.290440, -76.612328]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[39.290440, -76.612328]}>
        <Popup position={[39.290440, -76.612328]}>
          <div><h5>Inner Harbor</h5></div>
        </Popup>
      </Marker>
      {/* {bars.map(bar=>(
        <Marker position={[39.281270,-76.578010]}>

        </Marker>
      ))} */}
      <Marker position={[39.281270, -76.578010]}>
        <Popup position={[39.281270, -76.578010]}>
          <div><h5>Mahaffey's</h5></div>
        </Popup>
      </Marker>
      <Marker position={[39.279890, -76.574580]}>
        <Popup position={[39.279890, -76.574580]}>
          <div><h5>El Buffalo</h5></div>
        </Popup>
      </Marker>
      <Marker position={[39.282380, -76.575700]}>
        <Popup position={[39.282380, -76.575700]}>
          <div><h5>Lee's Pint and Shell</h5></div>
        </Popup>
      </Marker>
      <Marker position={[39.284500, -76.569560]}>
        <Popup position={[39.284500, -76.569560]}>
          <div><h5>The Chausser</h5></div>
        </Popup>
      </Marker>
      <Marker position={[39.280540, -76.570730]}>
        <Popup position={[39.280540, -76.570730]}>
          <div><h5>Walt's Inn</h5></div>
        </Popup>
      </Marker>
      <Marker position={[39.2843704, -76.5625121]}>
        <Popup position={[39.2843704, -76.5625121]}>
          <div><h5>Mobtown Brewing Company</h5></div>
        </Popup>
      </Marker>
      <Marker position={[39.3359946, -76.6440414]}>
        <Popup position={[39.3359946, -76.6440414]}>
          <div><h5>Union Brewing</h5></div>
        </Popup>
      </Marker>
      <Marker position={[39.2759176, -76.6157089]}>
        <Popup position={[39.2759176, -76.6157089]}>
          <div><h5>Mum's</h5></div>
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default LeafletMap;
