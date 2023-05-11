import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  auth: boolean;
}

function PrivateRoute(props: Props) {
  const { auth } = props;
  return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
