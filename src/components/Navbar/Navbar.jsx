import { Link, Outlet } from "react-router-dom";
import "./Navbar.css"

const Navigationbar = () => {
    return(
        <>  <ul>
                <li>
                    <Link to='/'>Go to Home</Link>
                </li>
            </ul>
            <br />
            <Outlet></Outlet>
        </>
    )
}

export default Navigationbar;