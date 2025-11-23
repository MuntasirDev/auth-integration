import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);   // FIXED
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>;
    }

    if (!user) {
        return <Navigate state={location.pathname} to="/login" replace />;
        
    }

    return children;
};

export default PrivateRoutes;
