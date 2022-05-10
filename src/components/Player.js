import React from "react";
import PlayerDetail from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

function Player(props) {
  return (
    <div className="c-player">
      <audio></audio>
      <h4>Playing now</h4>
      <PlayerDetail song={props.song} />
      <PlayerControls />
      <p>
        <strong>Next up: </strong>
        {props.nextSong.title} by {props.nextSong.artist}
      </p>
    </div>
  );
}
export default Player;
