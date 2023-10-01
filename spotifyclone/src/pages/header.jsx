/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Header.css";
import { useStateValue } from "./StateProvider";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@material-ui/icons/Search";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
