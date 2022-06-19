import React from "react";
import { useDispatch } from "react-redux";
import "../stayles/game.css";
import { loadDetail } from "../redux/actions/detailAction";

const Game = ({ name, released, image, id, platforms, rating }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail({ name, released, image, id, platforms, rating }));
  };

  return (
    <div onClick={loadDetailHandler} className="game">
      <h3>{name}</h3>
      <p>{released}</p>
      <img className="game_img" src={image} alt={name} />
    </div>
  );
};

export default Game;
