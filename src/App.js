import { useState } from "react";
import Player from "../components/Player";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "想去海边",
      artist: "🎉 夏日入侵企画",
      img_src: "../images/log.jpg",
      src: "../music/想去海边.mp3",
    },
    {
      title: "夏目漱石",
      artist: "🎉 橘子海",
      img_src: "../images/log.jpeg",
      src: "../music/夏目漱石.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  );
}

export default App;
