import { fetchGIF, fetchPhotos, fetchVideo } from "./api/mediaApi";

function App() {
  return (
    <div className="w-full h-screen bg-gray-700 text-white">
      <h1 className="text-amber-200">hello i am somay</h1>

      <div className="p-5 flex gap-5 m-5">
        <button
          className="p-3 bg-amber-300 text-white rounded-2xl"
          onClick={async () => {
            const data = await fetchPhotos("cow");
            console.log(data.results);
          }}
        >
          Get Photos
        </button>

        <button
          className="p-3 bg-amber-300 text-white rounded-2xl"
          onClick={async () => {
            const data = await fetchVideo("cat");
            console.log(data.videos);
          }}
        >
          Get Videos
        </button>

        <button
          className="p-3 bg-amber-300 text-white rounded-2xl"
          onClick={async () => {
            const data = await fetchGIF("cat");
            console.log(data);
          }}
        >
          Get GIF
        </button>
      </div>
    </div>
  );
}

export default App;
