import { useState, useEffect } from "react";
import { GET_RESTAURENT_MENU_URL } from "../../constants";

const useRestaurentMenu = (resId) => {
  const [restaurent, setRestaurent] = useState(null);

  useEffect(() => {
    getRestaurentDetails();
  }, []);

  async function getRestaurentDetails() {
    const data = await fetch(GET_RESTAURENT_MENU_URL + resId);
    const json = await data.json();
    setRestaurent(json);
  }

  return restaurent;
};

export default useRestaurentMenu;
