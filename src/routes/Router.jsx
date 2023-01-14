import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextStore } from '../context/AuthContext';

import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';

const Router = () => {
  return (
    <Routes>
      {/* <Route element={<NonAuthRoute authenticated={''} />}></Route>
      <Route element={<AuthRoute authenticated={''} />}></Route> */}
    </Routes>
  );
};

export default Router;
