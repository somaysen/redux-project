import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPages from "./pages/CollectionPages";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { useSelector } from "react-redux";
import AuthProtected from "./protectedRouter/AuthProtected";
import RegisterProtected from "./protectedRouter/RegisterProtected";

function App() {

  const { isAuthenticated } = useSelector((state) => state.auth);


  return (
    <div className="  bg-gray-300 text-white">
      {!isAuthenticated ? " " : <Navbar />}

      <Routes>

        <Route path="/auth/login" element={
         <RegisterProtected>
            <Login />
         </RegisterProtected>
        } />
        <Route path="/auth/register" element={
          <RegisterProtected>
            <Register />
          </RegisterProtected>} />

        <Route path='/' element={
          <AuthProtected>
            <Home />
          </AuthProtected>
        } />

        <Route path='/collection' element={
          <AuthProtected>
            <CollectionPages />
          </AuthProtected>
        } />

      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
