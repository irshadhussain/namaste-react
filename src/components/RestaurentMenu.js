import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const { id } = useParams();
  console.log(id);
  const [restaurent, setRestaurent] = useState(null);
  useEffect(() => {
    getRestaurentDetails();
  }, []);

  async function getRestaurentDetails() {
    console.log(id);
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=30.3164945&lng=78.03219179999999&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestaurent(json);
  }

  return !restaurent ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurent Id: {id}</h1>
        <h2>{restaurent?.data?.name}</h2>
        <img src={IMG_CDN_URL + restaurent?.data?.cloudinaryImageId} />
        <h3>{restaurent?.data?.area}</h3>
        <h3>{restaurent?.data?.locality}</h3>
        <h3>{restaurent?.data?.city}</h3>
        <h3>{restaurent?.data?.avgRating} star</h3>
        <h3>{restaurent?.data?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurent?.data?.menu?.items).map((menu) => {
            return <li key={menu?.id}>{menu?.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
