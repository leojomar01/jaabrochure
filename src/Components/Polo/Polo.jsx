import React, { useState } from "react";
import list from "../../list.json";
import "./Polo.scss";

function Polo() {
  const [selectedColor, setSelectedColor] = useState("All");

  const poloList = list.filter(item => item.category === "polo");

  const colors = [
    "All",
    ...new Set(poloList.flatMap(item => item.color))
  ];

  const filteredList =
    selectedColor === "All"
      ? poloList
      : poloList.filter(item => item.color.includes(selectedColor));

  return (
    <div id="polo">
      <div className="filter_title">
        <label htmlFor="color">Filter by: </label>
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        {colors.map((color, index) => (
          <option key={index} value={color}>
            {color.toUpperCase()}
          </option>
        ))}
      </select>
      </div>

      <div className="cards">
        {[...filteredList]
          .reverse()
          .map((item, index) => (
            <div className="card" key={index}>
              <img src={item.link} alt={item.color.join(", ")} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Polo;
