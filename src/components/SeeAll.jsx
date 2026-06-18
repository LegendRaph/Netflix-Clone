import tmdb from "../movie";
import endpoints from "../endpoints";
import Card from "./Card";
import { useState, useEffect } from "react";
function SeeAll({ category }) {
  const [page, setPage] = useState(1);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const res = await tmdb.get(`${category}?page=${page}`);

      setShows(res.data.results);
    };

    fetchShows();
  }, [page]);

  return (
    <div className="absolute top-27 lg:top-45 left-10">
      <div className="ml-3 lg:ml-12 flex flex-wrap gap-3">
        {shows.slice(0, 14).map((show) => (
          <div key={show.id} className="hover:scale-115 duration-250">
            <img
              src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
              alt=""
              className="w-35 h-50 lg:w-48 lg:h-70 rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 lg:mt-15 mr-5 lg:mr-0 justify-self-center">
        {[...Array(10)].map((_, i) => (
          <div className="inline-flex mx-[4px]">
            <button
              onClick={() => {
                setPage(i + 1);
              }}
              className="w-6 h-7 lg:w-10 lg:h-10 text-white bg-red-500 rounded-full lg:rounded-lg  lg:m-2 cursor-pointer hover:bg-red-700"
            >
              {i + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeeAll;
