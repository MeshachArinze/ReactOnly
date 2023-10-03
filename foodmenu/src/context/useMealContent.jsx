import { useContext } from "react";
import { MealContext } from "./mealContext";

const UseMealContext = () => {
  return useContext(MealContext);
};

export default UseMealContext;
