import { useEffect, useState } from "react";
import { GET_RESTAURENT_URL } from "../../constants";

const useAllRestaurent = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);

  useEffect(() => {
    getAllRestaurents();
  }, []);

  getAllRestaurents = async () => {
    const data = await fetch(GET_RESTAURENT_URL);
    const json = await data.json();
    setRestaurentList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurents(json?.data?.cards[2]?.data?.data?.cards);
  };

  return [restaurentList, filteredRestaurents];
};

export default useAllRestaurent;
