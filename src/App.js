import { useState, useEffect} from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "想去海边",
      artist: "🎉 夏日入侵企画",
      img_src:
        "http://p1.music.126.net/sLWN-iePq4ESOMPER0IWgQ==/109951164602081973.jpg?param=130y130",
      src: "https://www.xzmp3.com/down/45af8fd19ed9.mp3",
    },
    {
      title: "极恶都市",
      artist: "🎉 夏日入侵企画",
      img_src:
        "https://y.qq.com/music/photo_new/T002R300x300M000001goINS2qAQS6_1.jpg?max_age=2592000",
      src: "https://www.xzmp3.com/down/4e89440764ba.mp3",
    },
    {
      title: "夏目漱石",
      artist: "🎉 橘子海",
      img_src:
        "http://p1.music.126.net/sLWN-iePq4ESOMPER0IWgQ==/109951164602081973.jpg?param=130y130",
      src: "https://www.xzmp3.com/down/4e89440764ba.mp3",
    },
    {
      title: "人生浪费指南",
      artist: "🎉 夏日入侵企画",
      img_src:
        "http://p1.music.126.net/sLWN-iePq4ESOMPER0IWgQ==/109951164602081973.jpg?param=130y130",
      src: "https://www.xzmp3.com/down/45af8fd19ed9.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
    </div>
  );
}

export default App;