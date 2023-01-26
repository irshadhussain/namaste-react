import RestaurentCard from "./RestaurentCard";
import { restaurentList } from "../constants";
import { useState } from "react";

function filterData(searchInput, restaurents) {
  const filterData = restaurents.filter((restaurent) => {
    return restaurent.data.name
      .toLocaleLowerCase()
      .includes(searchInput.toLocaleLowerCase());
  });

  return filterData;
}

const Body = () => {
  const [allRestaurents, setAllRestaurents] = useState(restaurentList);
  const [filterRestaurents, setFilterRestaurents] = useState(restaurentList);
  const [searchInput, setSearchInput] = useState("");

  return (
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
            setFilterRestaurents(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restaurent-list">
        {filterRestaurents.map((restaurent) => {
          return (
            <RestaurentCard {...restaurent.data} key={restaurent.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
