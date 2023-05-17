import { Link } from "react-router-dom";

const ConditionalRendering = () => {
    const userLoggedIn = localStorage.getItem("userName");
    return(
        <div>
            {userLoggedIn && 
            <h1>This user is logged In</h1>
            }
            {!userLoggedIn &&
            <h1>Please Login</h1>
            }
            <Link to="/">Go back</Link>
        </div>
    )
}

export default ConditionalRendering;