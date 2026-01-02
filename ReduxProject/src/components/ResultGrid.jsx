import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos, fetchVideo, fetchGIF } from '../api/mediaApi'
import { setQuery, setResults, setLoading, setError } from "../redux/features/searchSlice"
import { useEffect } from "react";
import ResultCard from "./ResultCard"

function ResultGrid() {


    const dispatch = useDispatch();

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search);

    useEffect(function () {
        if(!query) return
        const getData = async () => {

            try {
                dispatch(setLoading())
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query);
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: "photo",
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html
                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideo(query);
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: "video",
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url:item.url
                    }))
                }
                if (activeTab == 'gif') {
                    let response = await fetchGIF(query);
                    data = response.results.map((item) => ({
                        id: item.id,
                        title: item.title || 'GIF',
                        type: 'gif',
                        thumbnail: item.media_formats.tinygif.url,
                        src: item.media_formats.gif.url,
                        url:item.url
                    }))
                }
                console.log(data)
                dispatch(setResults(data))
            } catch (error) {
                dispatch(setError(error.mess))
            }

        }
        getData()
    }, [query, activeTab,dispatch]);

    if(error) return <h1>error</h1>;
    if(loading) return <h1>Loading....</h1>

    return (
        <div className=" flex justify-between w-full flex-wrap gap-2 overflow-auto px-10" >
            {results.map((item,idx) => {
                return <div key={idx} >
                    <ResultCard item={item} />
                </div>
            })}
        </div>
    )
}

export default ResultGrid