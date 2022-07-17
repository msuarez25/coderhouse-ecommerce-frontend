import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import axios from 'axios';

const Logout = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(Context);

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${baseUrl}/logout`);
      console.log(response);
      if (response.data.logout) {
        setLogged({
          isLoggedIn: false,
          user: {},
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    navigate('/login');
    // eslint-disable-next-line
  }, [logged]);

  return <>{logged.isLoggedIn && handleLogout()}</>;
};

export default Logout;
