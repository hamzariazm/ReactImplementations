import { useState } from "react"
import {Link} from "react-router-dom"

const EventHandlers = () => {

    const [userName, setUserName] = useState();
    const userLoggedIn = localStorage.getItem("userName");

    const handleChange = (e) => {
        setUserName(e.target.value);
    }
    
    const Login = () => {
        localStorage.setItem("userName", userName)
        window.location.reload();
    }

    const Logout = () => {
        localStorage.removeItem("userName");
        window.location.reload();
    }
    

    return(
        <div>     
            {!userLoggedIn &&
            <div>
                <label htmlFor="username">Username: </label>
                <input name="username" type="text" onChange={handleChange}>
                </input>

                <br />
                <br />

                <button onClick={Login}>
                    Login
                </button>
            </div>
            }

            {userLoggedIn && 
                <button onClick={Logout}>Logout</button>
            }
            <Link to="/conditionalrendering">View Conditional Rendering</Link>
        </div>
    )
}

export default EventHandlers;