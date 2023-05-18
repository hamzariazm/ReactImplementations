import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const userLoggedIn = localStorage.getItem('userName');
    const location = useLocation();
    if(!userLoggedIn){
        return(<Navigate to='/eventhandlers' state={{from: location.pathname}} replace/>);
    }

    return children;
}

export default ProtectedRoute;