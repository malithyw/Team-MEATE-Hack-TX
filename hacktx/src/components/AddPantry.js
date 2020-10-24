import react from "react";
import { db } from "../firebase";

const dbsettest = async () => {
  await db
    .collection("test")
    .doc("test")
    .set({
      name: "local church pantry",
      lat: 50,
      lon: 50,
      inventory: {
        canned_peas: 5,
        bread: 10,
      },
    });
};

const dbgettest = async () => {
  const doc = await db.collection("test").doc("test").get();
  console.log(doc.data());
};

const AddPantry = (props) => {
  return (
    <div>
      <h1>Form Goes Here</h1>
      <p>maybe select location on map?</p>
      <button onClick={() => dbsettest()}>save to db</button>
      <button onClick={() => dbgettest()}>retrieve from db</button>
    </div>
  );
};
export default AddPantry;
