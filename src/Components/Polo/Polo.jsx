import React, { useState } from "react";
import list from "../../list.json";
import "./Polo.scss";

function Polo() {
  const [selectedColor, setSelectedColor] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null); // modal index

  const poloList = list.filter(item => item.category === "polo");

  const colors = [
    "All",
    ...new Set(poloList.flatMap(item => item.color))
  ];

  const filteredList =
    selectedColor === "All"
      ? poloList
      : poloList.filter(item => item.color.includes(selectedColor));

  const showModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === filteredList.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredList.length - 1 : prev - 1
    );
  };

  return (
    <div id="polo">

      {currentIndex !== null && (
        <div className="modal">
          <div className="wrapper" onClick={closeModal}></div>

          <div className="prevBtn btn" onClick={prevImage}>❮</div>

          <img
            src={filteredList[currentIndex].link}
            alt="Polo preview"
          />
          <div className="nextBtn btn" onClick={nextImage}>❯</div>

          <span className="closeBtn" onClick={closeModal}>×</span>
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
        {[...filteredList].map((item, index) => (
          <div className="card" key={index}>
            <div
              className="wrapper modalBtn"
              onClick={() => showModal(index)}
            />
            <img src={item.link} alt={item.color.join(", ")} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Polo;
