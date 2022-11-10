
import "./styleComponents.css"
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";
import { NavLink } from "react-router-dom";
import { activeStyle } from "./customStyle";
// import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar_container">
      <div className="sideBar_container-menu">
        <NavLink className="navLink" to="/client">
          {({ isActive }) => (
            <p className="center"
              style={isActive ? activeStyle : {}}
            >
              <GroupIcon /> Clients
            </p>
          )}
        </NavLink>
        <NavLink className="navLink"
          to="/damage">
          {({ isActive }) => (
            <p className="center"
              style={isActive ? activeStyle : {}}
            >
              <BarChartIcon /> Dommages
            </p>

          )}
        </NavLink>

      </div>
    </div>
  );
};

export default SideBar;
