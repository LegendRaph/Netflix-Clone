import Card from "./components/Card";
import endpoints from "./endpoints";
import SeeAll from "./components/SeeAll";
import Showspage from "./components/Showspage";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useState } from "react";
import netflix from "./assets/netflix.svg";
import search from "./assets/search.svg";
import notification from "./assets/notification.svg";
import user from "./assets/user.jpg";
import useStore from "./State";
import Category from "./components/Category";
import Nav from "./components/Nav";
import PageCat from "./components/PageCat";

function Home() {
  const {
    section,
    display,
    tvshows,
    movies,
    newandpopular,
    category,
    endpoint,
    setCategory,
    setSection,
    setDisplay,
    setMovies,
    setTvshows,
    setNewandpopular,
    page,
    setPage,
    loading
  } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItemClass = `${isMenuOpen ? "block  text-lg text-white" : "hidden lg:block"} text-3xl lg:text-lg`;

  return (
    <div>
      <Nav />
      {!display && !tvshows && !movies && !newandpopular ? (
        <>
          <Hero />
          <div className="absolute top-100 ml-4 lg:top-150 lg:ml-20">
            <Category
              cat={"trending/movie/day"}
              end={endpoints.trending}
              sec={"Now Trending"}
            />
            <Category
              cat={"movie/popular"}
              end={endpoints.popular}
              sec={"Popular on Netflix"}
            />
            <Category
              cat={"movie/top_rated"}
              end={endpoints.topRated}
              sec={"Top Rated"}
            />
            <Category
              cat={"/movie/now_playing"}
              end={endpoints.incinemas}
              sec={"Now in Cinemas"}
            />
            <Category
              cat={"/movie/upcoming"}
              end={endpoints.upcoming}
              sec={"Upcoming Movies"}
            />
          </div>
        </>
      ) : display ? (
        <div>
          <h1 className="absolute top-15 left-7 lg:left-20 text-lg lg:text-3xl text-white font-bold mb-3 mt-0 lg:mt-10">
            {section}
          </h1>
          <SeeAll category={category} />
        </div>
      ) : tvshows ? (
        <PageCat head="TV Shows" end={endpoints.tv.popular} p={setPage} />
      ) : movies ? (
        <PageCat head="Movies" end={endpoints.popular} p={setPage} />
      ) : newandpopular ? (
        <PageCat head="New & Popular" end={endpoints.trending} p={setPage} />
      ) : (
        <div></div>
      )}
      {!loading && (
        <Footer
        top={
          display
            ? "top-420 left-5 lg:top-225"
            : tvshows || movies || newandpopular
              ? "top-1900 left-5 lg:top-805"
              : "top-390 lg:top-640"
        }
      />
      )}
    </div>
  );
}
export default Home;
