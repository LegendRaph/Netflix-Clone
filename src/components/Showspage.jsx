import tmdb from "../movie";
import { useState, useEffect } from "react";
import useStore from "../State";

function Showspage({ category, page, count }) {
  const { loading, setLoading } = useStore();
  const [shows, setShows] = useState([]);

  function preloadImage(src) {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = resolve;
      img.onerror = resolve;
      img.src = src;
    });
  }

  useEffect(() => {
    const fetchShows = async () => {
      try {
        setLoading(true);

        const res = await tmdb.get(`${category}?page=${page}`);
        const showsList = res.data.results.slice(0, 14);

        await Promise.all(
          showsList.map((show) =>
            preloadImage(
              `https://image.tmdb.org/t/p/original${show.poster_path}`,
            ),
          ),
        );

        setShows(showsList);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, [page, category]);

  return (
    <div className="mb-3 ml-10">
      {loading && count === 0 ? (
        <div className="flex h-40 mt-70 items-center justify-center">
          <h1 className="text-4xl text-white">Loading...</h1>
        </div>
      ) : loading && count === 1 ? (
        <div></div>
      ) : (
        <div className="ml-3 flex flex-wrap gap-3 lg:ml-12">
          {shows.map((show) => (
            <div key={show.id} className="duration-250 hover:scale-115">
              <img
                src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
                alt={show.title || show.name || ""}
                className="h-50 w-35 rounded-lg lg:h-70 lg:w-48"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Showspage;
