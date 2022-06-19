import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../stayles/nav.css";
import { fetchSearch } from "../redux/actions/gameAction";

const Nav = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const submitHndler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(text));
    setText("");
  };

  return (
    <div className="nav">
      <div className="logo">
        <i className="fas fa-fire"></i>
        <h1>Fire Games </h1>
      </div>
      <form onSubmit={submitHndler} className="search">
        <input
          value={text}
          onChange={inputHandler}
          type="text"
          placeholder="enter name of game ..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Nav;
