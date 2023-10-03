import UseSidebarContext from '../../context/useSidebarContext';
import { ImCancelCircle} from "react-icons/im";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import UseMealContext  from '../../context/useMealContent';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar} = UseSidebarContext();
    const { categories } = UseMealContext();

    return (
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`}>
            <button type = "button" className='navbar-hide-btn' onClick={() => closeSidebar()}>
                <ImCancelCircle size = {24} />
            </button>

            <div className='side-content'>
                <ul className='side-nav'>
                    {
                        categories.map(category => (
                            <li className='side-item' key = {category.idCategory}>
                                <Link to = {`/meal/category/${category.strCategory}`} className='side-link ls-1 fs-13' onClick={() => closeSidebar()}>
                                    {category.strCategory}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar