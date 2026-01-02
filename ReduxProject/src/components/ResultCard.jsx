import { useDispatch } from "react-redux";
import { addCollection, addedTost } from "../redux/features/collectionSlice";

function ResultCard({ item }) {

    const dispatch = useDispatch();

    const addToCollection = (item) => {
        dispatch(addCollection(item));
        dispatch(addedTost());
    }

  return (
    <div className='w-[18vw] h-66 relative bg-zinc-300  rounded-2xl overflow-hidden ' >
      <a target="_black" href={item.url} className='h-full w-full ' >
        {item.type == "photo" ? <img className=' w-full h-full object-cover object-center ' src={item.src} alt='' /> : ""}
        {item.type == "video" ? <video autoPlay loop muted className=' w-full h-full object-cover object-center ' src={item.src} ></video> : ""}
        {item.type == "gif" ? <img className=' w-full h-full object-cover object-center ' src={item.src} alt="" /> : ""}
      </a>
      <div id="bottom" className=' w-full px-4 py-6 absolute bottom-0 flex items-center justify-between text-white' >
        <h1 className='text-xs font-semibold capitalize leading-tight line-clamp-2 ' >{item.title}</h1>
        <button onClick={() => {
          addToCollection(item)
          addedTost()
        }} className='px-3 py-1 active:scale-95  rounded bg-blue-500 text-white cursor-pointer font-medium ' >Save</button>
      </div>
    </div>
  )
}

export default ResultCard