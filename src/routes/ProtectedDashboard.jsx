import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router';

const ProtectedDashboard = ({ children }) => {
  const { logginedUser } = useAuth();
  if (!logginedUser) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedDashboard
