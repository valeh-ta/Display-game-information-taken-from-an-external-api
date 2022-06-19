import React from "react";
import "../stayles/gameDetail.css";
import { emptyDetail } from "../redux/actions/detailAction";
import { useDispatch, useSelector } from "react-redux";

const GameDetail = () => {
  const game = [useSelector((state) => state.detail.game)];
  const gameselected = game[0];

  const dispatch = useDispatch();

  const closeDetail = (e) => {
    const element = e.target;
    if (element.classList.contains("card_shadow")) {
      dispatch(emptyDetail());
    }
  };

  const getStarIcon = () => {
    const stars = [];
    const rating = Math.floor(gameselected.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i className="fa-solid fa-star"></i>);
      } else {
        stars.push(<i className="fa-solid fa-star-exclamation"></i>);
      }
    }
    return stars;
  };

  const getplatforms = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return <i key={platform} className="fa-brands fa-apple"></i>;
      case "Xbox One":
        return <i key={platform} className="fa-brands fa-xbox"></i>;

      case "PC":
        return <i key={platform} className="fa-solid fa-desktop"></i>;
      default:
        return <i key={platform} className="fa-solid fa-alien-8bit"></i>;
    }
  };
  return (
    <div onClick={closeDetail} className="card_shadow">
      <div className="detail">
        <div className="status">
          <div className="rigth">
            <h3>Name Game : {gameselected.name}</h3>
            <p>Rating: {getStarIcon()}</p>
          </div>
          <div className="info">
            <h3>Platforms : </h3>
            <div className="Platforms">
              {gameselected.platforms.map((data) =>
                getplatforms(data.platform.name)
              )}
            </div>
          </div>
        </div>
        <div className="div_img">
          <img
            className="img_game"
            src={gameselected.image}
            alt={gameselected.name}
          />
        </div>

        <p className="des">
          Blend your style and experience on a global, competitive stage. You
          have rounds to attack and defend your side using sharp gunplay and
          tactical abilities. And, with one life per-round, you'll need to think
          faster than your opponent if you want to survive. Take on foes across
          Competitive and Unranked modes as well as Deathmatch and Spike Rush.
        </p>
      </div>
    </div>
  );
};

export default GameDetail;
