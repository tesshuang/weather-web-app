const Search = ({ query, handleChange, handleSearch }) => (
  <div>
    <input
      type="text"
      placeholder="Search the city you would like to know"
      onChange={handleChange}
      value={query}
    />
    <button onClick={handleSearch}>Search</button>
  </div>
);

export default Search;
