import React from "react";

const Navbar = ({setQuery,SearchByCategory,searchBySources,searchNews,qry}) => {

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      <a className="navbar-brand" href="/">
        News
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
       

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white-50" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sources
        </a>
        <div class="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
          <button class="dropdown-item" onClick={()=>searchBySources("bbc-news")}>BBC News</button>
          <button class="dropdown-item" onClick={()=>{searchBySources("google-news")}}>Google News</button>
          <button class="dropdown-item" onClick={()=>{searchBySources("the-times-of-india")}}>The Times of India</button>
          <button class="dropdown-item" onClick={()=>{searchBySources("the-hindu")}}>The Hindu</button>
          <button class="dropdown-item" onClick={()=>{searchBySources("bbc-sport")}}>BBC Sports</button>
          <button class="dropdown-item" onClick={()=>{searchBySources("national-geographic")}}>National-Geographic</button>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white-50" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div class="dropdown-menu bg-black" aria-labelledby="navbarDropdownMenuLink">
          <button class="dropdown-item" onClick={()=>{SearchByCategory("business")}}>business</button>
          <button class="dropdown-item" onClick={()=>{SearchByCategory("entertainment")}}>entertainment</button>
          <button class="dropdown-item" onClick={()=>{SearchByCategory("general")}}>general</button>
          <button class="dropdown-item" onClick={()=>{SearchByCategory("health")}}>health</button>
          <button class="dropdown-item" onClick={()=>{SearchByCategory("sports")}}>sports</button>
          <button class="dropdown-item" onClick={()=>{SearchByCategory("science")}}>science</button>
          <button class="dropdown-item" onClick={()=>{SearchByCategory("technology")}}>technology</button>
        </div>
      </li>






        <div className="form-inline my-2 my-lg-0 ml-auto">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            value={qry}
            onChange={e=>{setQuery(e.target.value)}}/>
          <button className="btn btn-outline-success my-2 my-sm-0"  onClick={searchNews} >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;