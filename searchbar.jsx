import "./searchbar.css";

const SearchBar = () => {
    return(
    <div className="Search_bar"> 
        <p>DEVDeakin</p>   
        <input type="search" placeholder='search' />
        <p>Home</p>
        <p>About</p>
    </div>
    );
};

export default SearchBar;