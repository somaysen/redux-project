import { useDispatch, useSelector } from "react-redux";
import  {setActiveTads}  from "../redux/features/searchSlice";

function Tabs() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab)

  const tabs = ["photos", "videos", "gif"];

  return (
    <div className="flex gap-5 p-10">
      {tabs.map((elem, idx) => (
        <button
          key={idx}
          className={`${(activeTab ==elem?'bg-blue-700':'bg-gray-400')}  cursor-pointer active:scale-95 px-5 py-2 rounded-2xl`}
          onClick={() => dispatch(setActiveTads(elem))}
        >
          {elem}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
