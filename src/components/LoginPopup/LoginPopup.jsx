import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
import { useTranslation } from 'react-i18next';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const { t } = useTranslation();

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url + (currState === "Login" ? "/api/user/login" : "/api/user/register");

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong!");
    }
  };

  const isLogin = currState === "Login";

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{t(isLogin ? 'sign in' : 'sign up')}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {!isLogin && (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder={t('your name')}
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder={t('your email')}
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder={t('password')}
            required
          />
        </div>
        <button type='submit'>
          {isLogin ? t('login') : t('create_account')}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p className='continuee'>{t('terms notice')}</p>
        </div>
        <p>
          {isLogin
            ? t('no account') + " "
            : t('have account') + " "}
          <span onClick={() => setCurrState(isLogin ? "Sign Up" : "Login")}>
            {isLogin ? t('click here') : t('login here')}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
