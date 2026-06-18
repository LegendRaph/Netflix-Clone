import useStore from "../State";
import Card from "./Card";
function Category({ cat, end, sec }) {
  const { setCategory, setSection, setDisplay } = useStore();
  return (
    <div>
      <h1 className="text-lg lg:text-2xl text-white font-bold mb-3 mt-3 lg:mt-5">
        {sec}
      </h1>
      <div className="flex gap-3 overflow-x-auto max-w-screen lg:overflow-visible">
        {[...Array(7)].map((_, i) => (
          <Card key={i} endpoint={end} size={7} index={i} />
        ))}
      </div>
      <button
        onClick={() => {
          setCategory(cat);
          setSection(sec);
          setDisplay(true);
        }}
        className="text-white font-bold justify-end ml-[80%] text-xs lg:text-md lg:ml-340 mt-2 hover:scale-110 duration-250"
      >
        See All
      </button>
    </div>
  );
}

export default Category;
