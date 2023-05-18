import { useState } from "react"
import {useLocation, useNavigate} from "react-router-dom"

const EventHandlers = () => {

    const [userName, setUserName] = useState();
    const userLoggedIn = localStorage.getItem("userName");
    const navigate = useNavigate();
    const {state} = useLocation();

    const handleChange = (e) => {
        setUserName(e.target.value);
    }
    
    const Login = () => {
        localStorage.setItem("userName", userName)
        navigate(state?.from || '/')
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
                <div>
                    User is Logged In
                </div>
            }

        </div>
    )
}

export default EventHandlers;