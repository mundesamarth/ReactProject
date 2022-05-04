import { Component } from "react";
import "./card-list.styles.css";
import Card from "../cards/cards.componets";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
