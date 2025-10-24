import type { Gif } from "../actions/gif.interface";

interface PropsGifs {
  gifs: Gif[];
}

const GifsList = ({ gifs }: PropsGifs) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img src={gif.url} alt={gif.title} />
          <h3>{gif.title}</h3>
          <p>
            {gif.width}x{gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};

export default GifsList;
