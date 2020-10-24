import React, { useEffect, useState, setState } from "react"
import { db } from "../firebase";



function AddPantry(props){
  
  const dbsettest = async () => {
    await db
      .collection("test")
      .doc("test")
      .set({
        name: {name},
        lat: {lat},
        lon: {long},
        inventory: {
          canned_peas: 5,
          bread: 10,
        },
      });
      console.log('saved')
  };
  
  const dbgettest = async () => {
    const doc = await db.collection("test").doc("test").get();
    console.log(doc.data());
  };

  const [name, setName] = useState('name')
  const [lat, setLat] = useState('latitude')
  const [long, setLong] = useState('longitude')
  const onChangeName = (event) =>{
    setName(event.target.value)
    console.log('typing')
    console.log(event.target.value)
  }
  const onChangeLat = (event) =>{
    setLat(event.target.value)
    console.log('typing')
    console.log(event.target.value)
  }
  const onChangeLong = (event) =>{
    setLong(event.target.value)
    console.log('typing')
    console.log(event.target.value)
  }
  return (
    <div>
      <h1>Form Goes Here</h1>
      <form>
        <h1>Add your little pantry!</h1>
          <div>
            <label htmlFor="name">Name of your pantry</label>
            <input type="text" name="name" placeholder={name} onChange={onChangeName}/>
          </div>
          <div>
            <label htmlFor="lat">Latitude of your pantry</label>
            <input type="text" name="lat" placeholder={lat} onChange={onChangeLat}/>
          </div>
          <div>
            <label htmlFor="long">Longitude of your pantry</label>
            <input type="text" name="long" placeholder={long} onChange={onChangeLong}/>
          </div>
      </form>
      <p>maybe select location on map?</p>
      {/* add to above form */}
      <button onClick={dbsettest}>save to db</button>
      {/* add to homepage and pantry id */}
      <button onClick={() => dbgettest()}>retrieve from db</button>
    </div>
  );
};
export default AddPantry;
