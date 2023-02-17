import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "./utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { id } = useParams();
  const restaurent = useRestaurentMenu(id);

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
