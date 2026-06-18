import { useState, useEffect } from "react";
import tmdb from "../movie";

function Card({ endpoint, size, index }) {
  const [poster, setPoster] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseEnter = () => {
    const t = setTimeout(() => {
      setHovered(true);
    }, 2000); // 3 seconds

    setTimer(t);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer); // cancel if user leaves early
    setHovered(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await tmdb.get(endpoint);

      const movies = res.data.results.slice(0, size);

      const images = movies.map(
        (movie) => `https://image.tmdb.org/t/p/original${movie.poster_path}`,
      );

      setPoster(images);

      const trailerResults = await Promise.all(
        movies.map(async (movie) => {
          const videoRes = await tmdb.get(`/movie/${movie.id}/videos`);

          const trailer = videoRes.data.results.find(
            (video) => video.type === "Trailer" && video.site === "YouTube",
          );

          return trailer?.key || null;
        }),
      );

      setTrailer(trailerResults);
    };

    fetchData();
  }, [endpoint, size]);
  return (
    <div
      className={`relative min-w-27 lg:min-w-48 w-27 h-40 lg:w-48 lg:h-70 rounded-lg overflow-hidden cursor-pointer hover:scale-125 duration-250 hover:z-100 ${hovered ? "z-100 scale-135 duration-250" : "scale-100"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="border-white">
        <img
          src={poster[index]}
          alt=""
          className={`min-w-27 w-27 h-40 lg:min-w-48 lg:w-48 lg:h-70 hover:scale-120`}
        />
      </button>
      <div
        className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {trailer[index] && hovered ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          width="500"
          height="250"
          src={`https://www.youtube.com/embed/${trailer[index]}?autoplay=1&mute=0&controls=0&rel=0`}
          title="Trailer"
          allowFullScreen
          allow="autoplay; encrypted-media"
        />
      ) : (
        <p>No trailer</p>
      )}
    </div>
  );
}

export default Card;
