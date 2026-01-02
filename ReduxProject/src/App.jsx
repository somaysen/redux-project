import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPages from "./pages/CollectionPages";
import Navbar from "./components/Navbar";


function App() {

  return (
    <div className="  bg-gray-300 text-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path='/collection' element={<CollectionPages/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
