import { arrayOf } from "prop-types";
import React, { useState } from "react";

let TrafficLight = () => {
  const [colorselected, setColorselected] = useState("blue");
  const [purpleLight, setPurpleLight] = useState(false);
  let [colorList, setColorList] = useState(["red", "yellow", "green"]);

  let roundedDivsStyles = {
    borderRadius: "100%",
    height: "100px",
    width: "100px",
    margin: "5px",
  };

  //   let getRedLight = (e) => {
  //     setColor("red");
  //   };

  //   let getYellowLight = (e) => {
  //     setColor("yellow");
  //   };

  //   let getGreenLight = (e) => {
  //     setColor("green");
  //   };

  //   let getPurpleLight = (e) => {
  //     setColor("purple");
  //   };

  let togglePurpleLight = () => {
    colorList.includes("purple")
      ? setColorList(colorList.slice(0, colorList.length - 1))
      : setColorList([...colorList, "purple"]);
    console.log(colorList);
  };

  //   RESUELTO SOLO CON JAVASCRIPT
  //   let getLight = (e) => {
  //     let luces = document.querySelectorAll(".light");

  //     for (const luz of luces) {
  //       luz.classList.remove("selected");
  //     }

  //     e.target.classList.add("selected");
  //   };

  return (
    <div className="container">
      <div
        className="container m-auto bg-dark"
        style={{ height: "60px", width: "8px" }}
      ></div>
      <div
        className="rounded d-flex flex-column align-items-center m-auto space-around p-1 bg-dark"
        style={{ width: "120px" }}
      >
        {/*  */}

        {colorList.map((color, index) => {
          return (
            <div
              key={index}
              className={
                "light h-33 " + (colorselected == color ? "selected" : "")
              }
              style={{ ...roundedDivsStyles, backgroundColor: color }}
              onClick={() => setColorselected(color)}
            ></div>
          );
        })}
        {/*  */}

        {/* <div
          className={
            "light red bg-danger h-33 " + (color == "red" ? "selected" : "")
          }
          style={roundedDivsStyles}
          onClick={getRedLight}
        ></div>
        <div
          className={
            "light yellow bg-warning h-33 " +
            (color == "yellow" ? "selected" : "")
          }
          style={roundedDivsStyles}
          onClick={getYellowLight}
        ></div>
        <div
          className={
            "light green bg-success h-33 " +
            (color == "green" ? "selected" : "")
          }
          style={roundedDivsStyles}
          onClick={getGreenLight}
        ></div>
        <div
          className={
            "light purple bg-purple-300 h-33 " +
            (color == "purple" ? "selected " : " ") +
            (!purpleLight ? "d-none" : "d-block")
          }
          style={{ ...roundedDivsStyles, backgroundColor: "purple" }}
          onClick={getPurpleLight}
        ></div> */}
      </div>
      <button onClick={togglePurpleLight} className="m-2 btn btn-secondary">
        Add purple light
      </button>
    </div>
  );
};

export default TrafficLight;
