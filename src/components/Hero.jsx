import { useState, useEffect } from "react";
import tmdb from "../movie";
import endpoints from "../endpoints";
import poster_text1 from "../assets/poster_text1_bg.png";
import poster_text2 from "../assets/poster_text2_bg.png";
import poster_text3 from "../assets/poster_text3_bg.png";
import poster_text4 from "../assets/poster_text4_bg.png";
import poster_text5 from "../assets/poster_text5_bg.png";
import play from "../assets/play_pic.svg";
import info from "../assets/info.svg";

function Hero() {
  const [heroImage, setHeroimage] = useState([]);
  const [count, setCount] = useState(0);
  const [image, setImage] = useState([
    "/wMrV8SLne1jHLeYS0lLrA1Tf86P.jpg",
    "/dd31qJxOarrHyGZwYsCzOjobQzP.jpg",
    "/qO55CD8tgVL1T4WKn6zYFFiD6lL.jpg",
    "/9Z2uDYXqJrlmePznQQJhL6d92Rq.jpg",
    "/afHAM9qOTmrVDeaLIU7zfssotUY.jpg",
  ]);
  const [poster, setPoster] = useState([
    poster_text1,
    poster_text2,
    poster_text3,
    poster_text4,
    poster_text5,
  ]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    tmdb.get(endpoints.popular).then((res) => {
      const images = res.data.results
        .slice(0, 5)
        .map(
          (movie) =>
            `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        );
      const desc = res.data.results.slice(0, 5).map((movie) => movie.overview);
      setHeroimage(images);
      setDescription(desc);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    if (heroImage.length === 0) return;

    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % image.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImage]);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${image[count]}`}
        className="absolute w-full h-100 lg:h-145 object-cover"
      />
      <div className="ml-7 lg:ml-20 absolute top-50">
        <img src={poster[count]} className="w-40 h-25 lg:w-90 lg:h-40 mb-5" />
        <h1 className="text-white hidden lg:block lg:w-170 font-semibold">
          {description[count]}
        </h1>
        <div className="flex gap-4 mt-5">
          <button className="text-black w-20 h-8 lg:w-27 lg:h-10 bg-white rounded-sm font-semibold flex items-center pl-2 lg:pl-4 pr-3 hover:scale-105 duration-250">
            <span>
              <img src={play} className="w-10 h-10 pr-0 lg:pr-2" />
            </span>
            Play
          </button>
          <button className="text-white w-20 h-8 lg:w-27 lg:h-10 bg-[#666666] rounded-sm font-semibold flex items-center pl-3 lg:pl-4 hover:scale-105 duration-250">
            <span>
              <img src={info} className="w-8 h-8 pr-2" />
            </span>
            Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
