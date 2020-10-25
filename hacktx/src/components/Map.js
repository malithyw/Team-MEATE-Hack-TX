import React, { useState, useRef, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { db } from "../firebase";

const Marker = ({ text }) => <div>{text}</div>;

const Pantry = ({ name, info, inventory }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{info}</h3>
      <p>Inventory:</p>
      {Object.keys(inventory).map((key) => {
        return <p>{key + ":" + inventory[key]}</p>;
      })}
    </div>
  );
};

const getMarkers = async () => {
  let markers = [];
  let pdata = [];
  let pantries = await db.collection("pantries").get();

  if (pantries.empty) {
    console.log("nothing found");
    return;
  }

  let data;
  pantries.forEach((doc) => {
    data = doc.data();
    console.log(data.lat, data.lng, data.name);
    if (data.lat && data.lng && data.name)
      markers.push(
        <Marker lat={data.lat} lng={data.lng} text={data.name.name} />
      );

    if (data.name && data.info && data.inventory)
      pdata.push(
        <Pantry
          name={data.name.name}
          info={data.info.info}
          inventory={data.inventory}
        />
      );
  });
  return [pdata, markers];
};

const SimpleMap = (props) => {
  const [center, setCenter] = useState(props.center);
  const [markers, setMarkers] = useState([]);
  const [pdata, setPdata] = useState([]);

  useEffect(() => {
    getMarkers().then((m) => {
      setPdata(m[0]);
      setMarkers(m[1]);
    });
  }, []);

  console.log(markers);
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBr3jG4WaMURx2HRwsWgHoXpSrMdVf-BtA" }}
        defaultCenter={props.center}
        defaultZoom={10}
      >
        {markers}
      </GoogleMapReact>
      {pdata}
    </div>
  );
};

export default SimpleMap;
