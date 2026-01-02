import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { Search } from "lucide-react";

function SearchBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div className="w-full flex items-center justify-center mt-6">
      <form
        onSubmit={submitHandler}
        className="w-[60%]  flex items-center justify-center gap-2 bg-white shadow-lg rounded-2xl border-white border-2 px-4 py-2 "
      >
        {/* Search Icon */}
        <Search className="text-gray-400 w-5 h-5" />

        {/* Input */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          type="text"
          placeholder="Search anything..."
          className="flex-1  bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />

        {/* Button */}
        <button
          type="submit"
          className="px-5 py-2 rounded-full bg-gray-100 from-blue-500 to-indigo-600 text-white font-medium hover:scale-105 transition-all duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
