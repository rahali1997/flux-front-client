import React, { useState, useEffect } from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/authSlice";
import {notify} from "../../utils/notif"
import LandscapeIcon from '@mui/icons-material/Landscape';
import "./Login.css";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { username, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if(isError) {
      notify(message.Message,true)
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  useEffect(() => {
    if (username.length && password.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [username, password]);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    dispatch(login(userData)).then(res=>res.meta.requestStatus==="fulfilled" ? navigate('/client'):"")
  };

  return (
    <>   
      {isLoading &&   <LinearProgress/> }
      <div className="container">
        <div className="container__form">
        <center><LandscapeIcon style={{width:54,height:54}}/></center>
          <form onSubmit={onSubmit}>
            <input
              onChange={(e) => onChange(e)}
              className="container__form-input"
              type="username"
              placeholder="Nom d'utilisateur"
              value={username}
              name="username"
              required
            />
            <input
              onChange={(e) => onChange(e)}
              className="container__form-input"
              type="password"
              placeholder="Mot de passe"
              value={password}
              name="password"
              required
            />
            <button
              disabled={disabled}
              type="submit"
              className={
                disabled
                  ? "container__form-button-disabled"
                  : "container__form-button"
              }
            >
              se connecter
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
