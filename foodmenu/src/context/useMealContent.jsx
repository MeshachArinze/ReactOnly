import { useContext } from "react";
import { MealContext } from "./mealContext";

export const useMealContext = () => {
  return useContext(MealContext);
};
