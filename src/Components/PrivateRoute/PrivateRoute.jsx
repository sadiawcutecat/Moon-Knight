import  { Children, useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = () => {
   
        const { user, loading } = useContext(AuthContext);
        const location = useLocation();
        
        
            if (loading) {
                return <progress className="progress w-56"></progress>
            }
        
            if (user?.email) {
                return Children;
            }
        
            return <Navigate to="/login" state={{from: location}} replace></Navigate>;
       
};

export default PrivateRoute;