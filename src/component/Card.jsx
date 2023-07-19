import React from "react";
import { useNavigate } from "react-router-dom";
function Card({ item }) {
  let navigate = useNavigate();

  return (
    <>
      {!item
        ? "No items found"
        : item.map((items, index) => {
            return (
              <div key={index}>
                <div
                  className="Card-container"
                  onClick={() => navigate(`/${items.idMeal}`)}
                >
                  <img src={items.strMealThumb} alt="" />
                  <h3>{items.strMeal}</h3>
                </div>
              </div>
            );
          })}
    </>
  );
}

export default Card;
