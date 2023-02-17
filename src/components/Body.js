import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { filterData } from "../components/utils/helper";
import { GET_RESTAURENT_URL } from "../constants";

const Body = () => {
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    //API call
    getRetaurents();
  }, []);

  async function getRetaurents() {
    const data = await fetch(GET_RESTAURENT_URL);
    const json = await data.json();
    setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurents(json?.data?.cards[2]?.data?.data?.cards);
  }

  //no component render (Early return)
  if (!allRestaurents) return null;

  return allRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter the restaurents data
            const data = filterData(searchInput, allRestaurents);
            // update restaurent list
            setFilteredRestaurents(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restaurent-list">
        {filteredRestaurents.length === 0 ? (
          <h1>No restaurent match your filter...!</h1>
        ) : (
          filteredRestaurents.map((restaurent) => {
            return (
              <Link
                key={restaurent?.data?.id}
                to={"/restaurent/" + restaurent?.data?.id}
              >
                <RestaurentCard {...restaurent?.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
