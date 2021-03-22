const Search = ({ query, handleChange, handleSearch }) => (
  <div>
    <input
      className="w-2/3 shadow rounded border-0 p-3 mr-4 my-3"
      type="text"
      placeholder="Search the city you would like to know"
      onChange={handleChange}
      value={query}
      onKeyPress={(event) => {
        if (event.key === 'Enter' && query !== '') {
          handleSearch();
        }
      }}
    />
    <button
      className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>
);

export default Search;
