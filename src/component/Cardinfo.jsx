import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
let vid = "";
function Cardinfo() {
  const { MealId } = useParams();
  const [item, setItem] = useState();
  if (MealId != "") {
    Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.data.meals[0])
      .then((data) => setItem(data))
      .catch((e) => console.log(e));
  }
  if (item) {
    let url = item.strYoutube;
    let str = url.split("=");
    vid = str[str.length - 1];
  }
  return (
    <>
      {!item ? (
        ""
      ) : (
        <>
          <div className="content">
            <img src={item.strMealThumb} />
            <h1>Area : {item.strArea}</h1>
            <h1>Category : {item.strCategory}</h1>
            <div className="more-info">
              <div className="ingrediants">
                <h1>Ingredients</h1>
                <h3>
                  {item.strIngredient1} : {item.strMeasure1}
                </h3>
                <h3>
                  {item.strIngredient2} : {item.strMeasure2}
                </h3>
                <h3>
                  {item.strIngredient3} : {item.strMeasure3}
                </h3>
                <h3>
                  {item.strIngredient4} : {item.strMeasure4}
                </h3>
                <h3>
                  {item.strIngredient5} : {item.strMeasure5}
                </h3>
                <h3>
                  {item.strIngredient6} : {item.strMeasure6}
                </h3>
                <h3>
                  {item.strIngredient7} : {item.strMeasure7}
                </h3>
                <h3>
                  {item.strIngredient8} : {item.strMeasure8}
                </h3>
                <h3>
                  {item.strIngredient9} : {item.strMeasure9}
                </h3>
              </div>
              <div className="instruction">
                <h1>Instruction</h1>
                <p>{item.strInstructions}</p>
              </div>
            </div>
            <div className="video">
              <iframe src={`https://www.youtube.com/embed/${vid}`}></iframe>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cardinfo;
