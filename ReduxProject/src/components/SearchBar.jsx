import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';

function SearchBar() {
    const dispatch = useDispatch();

   const [text,setText] = useState("")
    
   const submitHandler = (e) => { 
       e.preventDefault()
       dispatch(setQuery(text))
       setText('')
   }

return (
    <div >
        <form onSubmit={(e) => {submitHandler(e) }}
         className=' w-full flex justify-center gap-5 '  >
            <input 
            value={text}
            onChange={(e) => setText(e.target.value)}

                required
                className='w-full p-4 border-2 border-black rounded-full  '
                type='text'
                placeholder='Search anything.... ' />

            <button className='border p-2 rounded-full'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar