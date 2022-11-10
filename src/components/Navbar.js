import "./styleComponents.css"
import LandscapeIcon from '@mui/icons-material/Landscape';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch=useDispatch()
  const close=()=>{
    dispatch(logout())

  }
  return (
    <div className="navbar_container">
      <div className="right_side">
      <LandscapeIcon   
      style={{ marginLeft: 5, marginTop:-25, width: 60, height: 60, color: "#232D4B" }}/>
      </div>
      <div className="left_side">
       {user ? <button onClick={()=>close()} className="logout">Se déconnecter</button>:<></>}
      </div>
    </div>
  )
}

export default Navbar