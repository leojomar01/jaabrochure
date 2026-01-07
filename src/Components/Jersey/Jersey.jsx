import React, { useState } from 'react'
import list from "../../list.json";



function Jersey() {

      const [selectedColor, setSelectedColor] = useState("All");

  const jerseyList = list.filter(item => item.category === "jersey");

  const colors = [
    "All",
    ...new Set(jerseyList.flatMap(item => item.color))
  ];

  const filteredList =
    selectedColor === "All"
      ? jerseyList
      : jerseyList.filter(item => item.color.includes(selectedColor));

  return (
    <div id='jersey'>
      <div className="filter_title">
        <label htmlFor="color">Filter by: </label>
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        {colors.map((color, index) => (
          <option key={index} value={color}>
            {color}
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
  )
}

export default Jersey
