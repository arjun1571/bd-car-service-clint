import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { Navigate,useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location= useLocation()
    if(loading){
        return <h2>loading................</h2>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}}></Navigate>;
};

export default PrivateRouter;