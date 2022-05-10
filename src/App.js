import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "想去海边",
      artist: "🎉 夏日入侵企画",
      img_src:
        "http://p2.music.126.net/sLWN-iePq4ESOMPER0IWgQ==/109951164602081973.jpg?param=130y130",
      src: "../music/想去海边.mp3",
    },
    {
      title: "极恶都市",
      artist: "🎉 夏日入侵企画",
      img_src:
        "https://y.qq.com/music/photo_new/T002R300x300M000002rVsxO1OCAu1_1.jpg?max_age=2592000",
      src: "../music/想去海边.mp3",
    },
    {
      title: "夏目漱石",
      artist: "🎉 橘子海",
      img_src:
        "https://y.qq.com/music/photo_new/T002R300x300M000001goINS2qAQS6_1.jpg?max_age=2592000",
      src: "../music/夏目漱石.mp3",
    },
    {
      title: "人生浪费指南",
      artist: "🎉 夏日入侵企画",
      img_src:
        "https://qpic.y.qq.com/music_cover/iaVNVUXOg73ua71Z0dtuz7fMwxyZvNkXvqt4GnUc7BoPw249DSr8JIw/300",
      src: "../music/想去海边.mp3",
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
