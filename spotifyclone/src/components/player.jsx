/* eslint-disable react/prop-types */
import Footer from "../pages/footer";
import "../styles/player.css";
import Sidebar from "./sidebar";
import Body from "../pages/body";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
