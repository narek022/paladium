import React from "react";
import GoogleMapReact from "google-map-react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./map.css";

export function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <Map />
    </div>
  );
}

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map-cont"
    >
      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
}

export default MapComponent;
