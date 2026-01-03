import { set } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router"
import 'remixicon/fonts/remixicon.css'
import { setLogout } from "../redux/features/auth";

function Navbar() {
  const dispatch = useDispatch()

  const isAuthenticated = useSelector((state) => state.auth);

  return (
    <div>
      <div className=" font-(family-name:Helvetica) flex justify-between items-center p-5 bg-gray-500 text-2xl font-semibold">
        <h1 className="text-2xl " ><a href="/">Media Search</a></h1>
        {isAuthenticated ? <div className="flex items-center gap-5" >
          <Link className="bg-white px-3 py-2 rounded-2xl text-xl " to='/' >Search</Link>
          <Link className="bg-white px-3 py-2 rounded-2xl text-xl " to='/collection' >Collection</Link>
          <i onClick={() => {
            dispatch(setLogout());
          }} className ="ri-logout-box-r-line text-xl border-2 bg-red-900 rounded-full py-1 px-2 border-transparent  cursor-pointer "></i>
        </div> : <div>
          <Link className="bg-white px-3 py-2 rounded-2xl text-xl " to='/auth/login' >Login</Link>
          <Link className="bg-white px-3 py-2 rounded-2xl text-xl ml-4 " to='/auth/register' >Register</Link>
        </div>}


      </div>
    </div>
  )
}

export default Navbar