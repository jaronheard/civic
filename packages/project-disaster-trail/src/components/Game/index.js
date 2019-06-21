/* eslint-disable import/no-named-as-default */
import React from "react";
import Orb from "./Orb";

import "@hackoregon/component-library/assets/global.styles.css";

const Game = () => (
  <div>
    <h1>This is the game</h1>
    <Orb x={200} y={400} />
  </div>
);

Game.displayName = "Game";

export default Game;
