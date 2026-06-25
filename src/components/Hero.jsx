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
  const image = [
    "/wMrV8SLne1jHLeYS0lLrA1Tf86P.jpg",
    "/dd31qJxOarrHyGZwYsCzOjobQzP.jpg",
    "/qO55CD8tgVL1T4WKn6zYFFiD6lL.jpg",
    "/9Z2uDYXqJrlmePznQQJhL6d92Rq.jpg",
    "/afHAM9qOTmrVDeaLIU7zfssotUY.jpg",
  ];
  const desc = [
    "The young daughter of a journalist disappears into the desert without a trace—eight years later, the broken family is shocked when she is returned to them, as what should be a joyful reunion turns into a living nightmare.",
    "Jack Ryan is reluctantly pulled back into espionage when an international covert mission unravels a deadly conspiracy. Racing against time, he joins CIA allies Mike November & James Greer and sharp MI6 officer Emma Marlowe to battle a rogue black-ops unit in a high-stakes, deeply personal fight.",
    "As Frank Castle searches for meaning beyond revenge, an unexpected force pulls him back into the fight.",
    "Having thwarted Bowser's previous plot to marry Princess Peach, Mario and Luigi now face a fresh threat in Bowser Jr., who is determined to liberate his father from captivity and restore the family legacy. Alongside companions new and old, the brothers travel across the stars to stop the young heir's crusade.",
    "Science teacher Ryland Grace wakes up on a spaceship light years from home with no recollection of who he is or how he got there. As his memory returns, he begins to uncover his mission: solve the riddle of the mysterious substance causing the sun to die out. He must call on his scientific knowledge and unorthodox ideas to save everything on Earth from extinction.",
  ];
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
    }, 7000);

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
          {desc[count]}
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
