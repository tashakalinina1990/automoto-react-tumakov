import React from "react";
import PropTypes from "prop-types";
import {YMaps, Map, Placemark} from "react-yandex-maps";

const MapSettings = {
  COORDINATES: [59.968137, 30.316263],
  ZOOM: 15,
};

const ContactsMap = (props) => {
  const {className} = props;

  return (
    <YMaps>
      <Map
        defaultState={{center: MapSettings.COORDINATES, zoom: MapSettings.ZOOM}}
        className={className}
      >
        <Placemark
          geometry={MapSettings.COORDINATES}
          options={{
            iconLayout: "default#image",
            iconImageHref: "./img/placemark.svg",
            iconImageSize: [34, 42],
          }}
        />
      </Map>
    </YMaps>
  );
};

ContactsMap.propTypes = {
  className: PropTypes.string,
};

export default ContactsMap;
