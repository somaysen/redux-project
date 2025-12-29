import { useDispatch,useSelector } from "react-redux"
import { fetchPhotos, fetchVideo, fetchGIF } from '../api/mediaApi'
import { setQuery,setResults,setLoading,setError } from "../redux/features/searchSlice"
import { useEffect } from "react";

function ResultGrid() {

    const {query,activeTab,resulit,loading,error} = useSelector((store) => store.search);

    useEffect(function(){
        const getData = async() => { 
            let data 
            if(activeTab == 'photos'){
                let response = await fetchPhotos(query);
                data = response.results
            }
            if(activeTab == 'videos') { 
                let response = await fetchVideo(query);
                data = response.videos
            }
            if(activeTab == 'gif'){
                let response = await fetchGIF(query);
                data = response.results
            }
            console.log(data)
        }
        getData()
    },[query,activeTab])
   
    
  return (
    <div >ResultGrid</div>
  )
}

export default ResultGrid