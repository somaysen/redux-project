import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/tabs";

function App() {

  return (
    <div className="w-full h-screen bg-gray-700 text-white">
     <SearchBar/>
     <Tabs/>
     <ResultGrid/>
    </div>
  );
}

export default App;
