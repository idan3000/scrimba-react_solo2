import React from "react";
import mapMarker from "../images/mapMarker.png";

const Local = (props) => {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
    isLast,
  } = props;
  return (
    <React.Fragment>
      <div className="local--big--div">
        <img src={imageUrl} alt={title} className="local--img" />
        <div className="local--text">
          <img src={mapMarker} alt="mapMarker" className="map--marker" />
          <span className="local">{location}</span>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="google--maps"
          >
            View on Google Maps
          </a>
          <div className="title">{title}</div>
          <div className="date">
            {startDate} - {endDate}
          </div>
          <div className="description">{description}</div>
        </div>
      </div>
      {isLast ? <hr className="hr__last" /> : <hr />}
    </React.Fragment>
  );
};

export default Local;
