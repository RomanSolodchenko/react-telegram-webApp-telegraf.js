import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0); // состояние счетчика

  const { title, Image, price, id } = food;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };
  // увел на 1(умен на 1) при бтн онклик колво товара

  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      {/* // если счетчик не равен 0 то появляется иконка с кол-во выбраных элементов вверху карточки */}
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title} . <span className="card__price">$ {price}</span>
      </h4>
      {/* вставка после изображ название и цены товара  */}
      <div className="btn-container">
        {/* добавление кнопки +\-  */}
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : ( " " )}
      </div>
    </div>
  );
}

export default Card;
