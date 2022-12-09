import { useState, useEffect } from "react";
import { parse } from "rss-to-json";
import { podcastList } from "./components/podcastList";
import FeedList from "./components/FeedList";

import "./App.css";

function App() {
  const [rss, setRss] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [rssUrl, setRssUrl] = useState(
    "https://anchor.fm/s/1e123f2c/podcast/rss"
  );

  useEffect(() => {
    parse(rssUrl)
      .then((response) => {
        setRss(response);
      })
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }, [rssUrl]);

  const handleClick = (podUrl) => {
    setRssUrl(podUrl);
  };

  return (
    <div className="App">
      <div className="grid grid-cols-1 p-2 gap-2 items-center justify-center">
        <h1 className="titulo text-lg p-2 font-black uppercase text-center">
          Podcasts sobre bitcoin en español
        </h1>
        <div className="fuentes inline-flex flex-wrap gap-2 items-center justify-center">
          {isLoading ? (
            <p>cargando...</p>
          ) : (
            podcastList.map((arr, i) => (
              <button
                className="border-solid border-2 rounded border-gray-100 p-2 shadow-md"
                key={i}
                onClick={() => handleClick(arr.value)}
              >
                {arr.label}
              </button>
            ))
          )}
        </div>
        <div className="feed">
          {isLoading ? (
            <p>Cargando datos...</p>
          ) : (
            <FeedList isLoading={isLoading} rssData={rss}></FeedList>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
