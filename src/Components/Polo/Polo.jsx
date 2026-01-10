import React, { useState } from "react";
import list from "../../list.json";
import "./Polo.scss";

function Polo() {
  const [selectedColor, setSelectedColor] = useState("All");
  const [modalImage, setModalImage] = useState(null); // modal state

  const poloList = list.filter(item => item.category === "polo");

  const colors = [
    "All",
    ...new Set(poloList.flatMap(item => item.color))
  ];

  const filteredList =
    selectedColor === "All"
      ? poloList
      : poloList.filter(item => item.color.includes(selectedColor));

  const showModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div id="polo">

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="wrapper"></div>
          <img src={modalImage} alt="Polo preview" />
        </div>
      )}

      <div className="filter_title">
        <label>Filter by: </label>
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
          // .slice(0, 1)
          .reverse()
          .map((item, index) => (
            <div className="card" key={index}>
              <div
                className="wrapper modalBtn"
                onClick={() => showModal(item.link)}
              />
              <img src={item.link} alt={item.color.join(", ")} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Polo;
