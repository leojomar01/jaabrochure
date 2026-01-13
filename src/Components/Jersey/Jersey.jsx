import React, { useState } from 'react'
import list from "../../list.json";



function Jersey() {
 const [selectedColor, setSelectedColor] = useState("All");
  const [modalImage, setModalImage] = useState(null); // modal state

  const jerseyList = list.filter(item => item.category === "jersey");

  const colors = [
    "All",
    ...new Set(jerseyList.flatMap(item => item.color))
  ];

  const filteredList =
    selectedColor === "All"
      ? jerseyList
      : jerseyList.filter(item => item.color.includes(selectedColor));

  const showModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div id="polo">

     {modalImage && (
        <div className="modal" >
          <div className="wrapper"  onClick={closeModal}></div>
          <img src={modalImage} alt="Polo preview" />
          <span   className='closeBtn' onClick={closeModal}></span>

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
export default Jersey
