import React from "react";
import data from "../../data/index.json";

function Photography() {
  return (
    <div>
      <h1 className="photo--header">Photography</h1>
      <div className="photo--container">
        {data?.photography?.map((photo, index) => (
          <div key={index} className="photo--card">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photography;
