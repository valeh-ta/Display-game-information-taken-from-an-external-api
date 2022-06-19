import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "../components/game";
import "../stayles/app.css";
import { loadGames } from "../redux/actions/gameAction";
import GameDetail from "../components/GameDetail";
import Nav from "../components/Nav";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upComing, searched } = useSelector(
    (state) => state.games
  );

  const { game } = useSelector((state) => state.detail);
  return (
    <>
      {game.id && <GameDetail />}

      <div className="game_list">
        <Nav />
        {searched.length ? (
          <div>
            <h2>Search Games</h2>
            <div className="games">
              {searched.map((game) => (
                <Game
                  desc={game.description_raw}
                  rating={game.rating}
                  platforms={game.platforms}
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        <h2>upcoming Games</h2>
        <div className="games">
          {upComing.map((game) => (
            <Game
              desc={game.description_raw}
              rating={game.rating}
              platforms={game.platforms}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </div>

        <h2>popular Games</h2>
        <div className="games">
          {popular.map((game) => (
            <Game
              rating={game.rating}
              platforms={game.platforms}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </div>
        <h2> new Games</h2>
        <div className="games">
          {newGames.map((game) => (
            <Game
              rating={game.rating}
              platforms={game.platforms}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
