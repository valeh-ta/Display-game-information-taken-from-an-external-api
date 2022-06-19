import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import GameReducer from "./GameReducer";

const RootReducer = combineReducers({
  games: GameReducer,
  detail: detailReducer,
});

export default RootReducer;
