//key = 7732286edc574b67bd565138fd802cea   GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
//GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7

const API_KEY = "7732286edc574b67bd565138fd802cea";
const base_url = "https://api.rawg.io/api/";

//current data
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();

const CurrentMonth = getCurrentMonth();
const CurrentDay = getCurrentDay();
const currentData = `${currentYear}-${CurrentMonth}-${CurrentDay}`;

const lastYear = `${currentYear - 1}-${CurrentMonth}-${CurrentDay}`;
const nextYear = `${currentYear + 1}-${CurrentMonth}-${CurrentDay}`;

const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentData}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${API_KEY}&dates=${currentData},${nextYear}&ordering=-added&page_size=10 `;
const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentData}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
