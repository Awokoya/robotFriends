const SearchBox = ({ searchChange}) =>{
  return (
    <div className= 'pa3 ba b--black bg lightest-blue '>
      <input type='search'
      placeholder = 'search robots'
      onChange = {searchChange}
      />
    </div>
  );
}

export default SearchBox;