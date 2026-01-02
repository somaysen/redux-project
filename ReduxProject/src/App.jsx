import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPages from "./pages/CollectionPages";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";



function App() {

  return (
    <div className="  bg-gray-300 text-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path='/collection' element={<CollectionPages/>}/>
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/register" element={<Register/>} />
      </Routes>
      <ToastContainer/>
     
    </div>
  );
}

export default App;
