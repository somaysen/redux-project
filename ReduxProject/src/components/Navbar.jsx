import { Link } from "react-router"

function Navbar() {
  return (
    <div>
      <div className=" font-(family-name:Helvetica) flex justify-between items-center p-5 bg-gray-500 text-2xl font-semibold">
                <h1 className="text-2xl " >Media Search</h1>
                <div className="flex gap-5" >
                    <Link className="bg-white px-3 py-2 rounded-2xl text-xl " to='/' >Search</Link>
                    <Link className="bg-white px-3 py-2 rounded-2xl text-xl " to='/collection' >Collection</Link>
                </div>
            </div>
    </div>
  )
}

export default Navbar