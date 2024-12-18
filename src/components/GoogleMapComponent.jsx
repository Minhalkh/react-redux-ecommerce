import React from "react";

const GoogleMapComponent = () => {
  return (
    <>
      <div className="relative mt-20 h-[300px] w-[250px] rounded">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=144.947%2C-37.819%2C144.960%2C-37.810&layer=mapnik"
          className="w-full h-full"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMapComponent;