import useStore from "../State";
import Showspage from "./Showspage";

function PageCat({ head, end, p }) {
  const { page, setPage, loading } = useStore();
  return (
    <div className="mt-27 lg:mt-40">
      <h1 className="absolute top-15 left-7 lg:left-20 text-lg lg:text-3xl text-white font-bold mb-3 mt-0 lg:mt-10">
        {head}
      </h1>
      <Showspage category={end} page={page} setPage={p} count={0} />
      <Showspage category={end} page={1 + page} setPage={p} count={1}/>
      <Showspage category={end} page={2 + page} setPage={p} count={1}/>
      <Showspage category={end} page={3 + page} setPage={p} count={1}/>
      <Showspage category={end} page={4 + page} setPage={p} count={1}/>
      {!loading && (
        <div className="mt-10 mb-90 lg:mt-15 mr-5 lg:mr-0 justify-self-center">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="inline-flex mx-[4px]">
            <button
              onClick={() => {
                setPage(i + 5);
              }}
              className="w-6 h-7 lg:w-10 lg:h-10 text-white bg-red-500 rounded-full lg:rounded-lg  lg:m-2 cursor-pointer hover:bg-red-700"
            >
              {i + 1}
            </button>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default PageCat;
