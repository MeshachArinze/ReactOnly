
import "./HomePage.scss";
import UseMealContext from '../../context/useMealContent';
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";

const HomePage = () => {
  const {categories, meals, categoryLoading, mealsLoading} = UseMealContext();

  return (
    <main className='main-content'>
      { (mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals = {meals} /> : "" }
      { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }
    </main>
  )
}

export default HomePage;
