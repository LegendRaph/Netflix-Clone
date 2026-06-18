const endpoints = {
    popular: '/movie/popular',
    trending: "/trending/movie/day",
    topRated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
    images: "https://image.tmdb.org/t/p/original",
    incinemas: "/movie/now_playing",
    movieImages : (id) => `/movie/${id}/images`,
    videos : (id) => `/movie/${id}/videos`,

    movieDetails: (id) => `/movie/${id}`,

    movieVideos: (id) => `/movie/${id}/videos`,


    tv: {
        popular: "/tv/popular"
    }
    }


export default endpoints;