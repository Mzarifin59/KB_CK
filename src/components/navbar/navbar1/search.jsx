
const Search = () => {
    return (
      <>
        <div className="flex flex-wrap bg-white rounded-lg p-5 shadow-2xl gap-3 items-center w-full max-w-xl max-md:min-w-44">
          <input 
            type="text" 
            className="flex-grow p-3 text-black border border-gray-300 rounded-lg bg-white max-sm:w-full" 
            placeholder="Cari di sini..." 
          />
          <button className="bg-[#136AAD] p-3 rounded-lg text-white w-32 max-sm:w-full">
            Cari
          </button>
        </div>
      </>
    );
  };
  
  export default Search;
  