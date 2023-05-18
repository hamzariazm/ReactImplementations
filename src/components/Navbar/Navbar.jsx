import { Link, Outlet } from "react-router-dom";
import "./Navbar.css"

const Navigationbar = () => {

    const Logout = () => {
        localStorage.removeItem('userName');
        window.location.reload();
    }
    return(
        <>  <ul>
                <li>
                    <Link to='/'>Go to Home</Link>
                </li>
                <li>
                    <button onClick={Logout}>Logout</button>
                </li>
            </ul>
            <br />
            <Outlet></Outlet>
        </>
    )
}

export default Navigationbar;