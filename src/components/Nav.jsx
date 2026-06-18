import useStore from "../State";
import netflix from '../assets/netflix.svg';
import search from '../assets/search.svg';
import notification from '../assets/notification.svg';
import user from  '../assets/user.jpg'
function Nav() {
    const { isMenuOpen, setIsMenuOpen, display, setDisplay, tvshows, setTvshows, movies, setMovies, newandpopular, setNewandpopular } = useStore();
    const menuItemClass = `${isMenuOpen ? "block  text-lg text-white" : "hidden lg:block"} text-3xl lg:text-lg`;
    return (
        <div className="fixed top-0 z-510 bg-gradient-to-b from-[#000000] to-transparent backdrop-blur-[1px]  w-full h-15 lg:h-20 text-white flex items-center px-7 lg:px-10 gap-4 lg:gap-8">
            <div className="absolute w-full z-30 top-0 shadow-[0_20px_40px_#00000095]" />
            <img
              src={netflix}
              alt="Netflix Logo"
              className="lg:w-30 h-auto lg:ml-10"
            />
            <div className={`flex items-center gap-8 ${isMenuOpen ? 'absolute right-0 top-0 z-10 flex-col w-50 h-screen bg-[#141414]' : ''}`}>
              <button className="fixed z-20 top-3.5 right-8 text-2xl block lg:hidden lg:text-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? '✕' : '☰'}
              </button>
              <button className="mt-20 lg:mt-0 hover:scale-110 duration-200" onClick={() => {setDisplay(false); setTvshows(false); setMovies(false); setNewandpopular(false); setIsMenuOpen(false)}}><h1 className={menuItemClass}>Home</h1></button>
              <button className="hover:scale-110 duration-200" onClick={() => {setDisplay(false); setTvshows(true); setMovies(false); setNewandpopular(false); setIsMenuOpen(false)}}><h1 className={menuItemClass}>TV Shows</h1></button>
              <button className="hover:scale-110 duration-200" onClick={() => {setDisplay(false); setTvshows(false); setMovies(true); setNewandpopular(false); setIsMenuOpen(false)}}><h1 className={menuItemClass}>Movies</h1></button>
              <button className="hover:scale-110 duration-200" onClick={() => {setDisplay(false); setTvshows(false); setMovies(false); setNewandpopular(true); setIsMenuOpen(false)}}><h1 className={menuItemClass}>New & Popular</h1></button>
              <button className="hover:scale-110 duration-200"><h1 className={menuItemClass}>My List</h1></button>
            </div>
            <button><img src={search} alt="Search Icon" className="absolute right-37 top-5 w-5 h-5 lg:static lg:w-7 lg:h-7 ml-28 lg:ml-90" /></button>
            <h1 className="hidden lg:block lg:text-lg">LegendRaph</h1>
            <button><img src={notification} alt="Notification Icon" className="absolute right-27 top-5 w-6 h-6 lg:static lg:w-8 lg:h-8" /></button>
            <img src={user} className='absolute right-17 w-7 h-7 lg:static lg:w-11 lg:h-11 rounded-md'/>
            <div className="pointer-events-none absolute left-0 top-0 h-12 w-full bg-gradient-to-b from-[#00000020] to-transparent" />
          </div>
    )
}

export default Nav;