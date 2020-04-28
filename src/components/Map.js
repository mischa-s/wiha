import React from "react";
import GoogleMapReact from "google-map-react";

const isClient = typeof window !== "undefined";
const address = { lat: -41.2419, lng: 174.901 };
const googleMapsApiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY

export const GoogleMap = (props) => {
  const lat = parseFloat(address.lat);
  const lng = parseFloat(address.lng);
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      {isClient && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsApiKey }}
          defaultCenter={[lat, lng]}
          defaultZoom={14}
        >
          <div className="marker" lat={lat} lng={lng} />
        </GoogleMapReact>
      )}
    </div>
  );
};
