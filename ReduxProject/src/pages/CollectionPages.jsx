import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard.jsx'
import { clearCollection } from '../redux/features/collectionSlice.js';

function CollectionPages() {
  const dispatch = useDispatch();

  const results = useSelector((state) => state.collection.items);

  const Allclear = () => {
    dispatch(clearCollection());
  }

  return (
    
       <div className=' overflow-auto px-10 py-5' >
        {results.length > 0 ? <div className=' flex items-center justify-between mb-6 ' >
          <h1 className=' text-3xl font-bold text-center py-6  ' >My Collection</h1>
          <button onClick={() => {
            Allclear()
          }}  className=' text-lg bg-red-600 px-4 py-2 rounded '>Clear collection</button>
        </div>: <h1 className=' text-3xl font-bold text-center py-6  ' >No items in Collection</h1> }


        <div className=" flex justify-start w-full flex-wrap gap-4  " >
            {results.map((item,idx) => {
                return <div key={idx} >
                    <CollectionCard item={item} />
                </div>
            })}
        </div>
       </div>
   
  )
}

export default CollectionPages