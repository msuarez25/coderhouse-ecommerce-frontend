import React from 'react';

const LoggedPanel = ({ show }) => {
  const isLoggedIn = show.isLoggedIn;
  const user = show.user;
  return (
    <>
      {isLoggedIn && (
        <div className='userInfo'>
          <img
            src={`${process.env.REACT_APP_API_URL}/${user.userImg}`}
            alt={user.userName}
            className='avatar'
          />
          <div className='userInfoWrap'>
            Bienvenido <span>{user.userName}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default LoggedPanel;
