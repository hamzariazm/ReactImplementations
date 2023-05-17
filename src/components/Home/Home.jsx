import {Link} from "react-router-dom"

const Home = () => {

    return(
        <>
            <h1>Home Page</h1>
            <Link to='/componentsandprops'>View Components and Props</Link>
            <br />
            <Link to='/conditionalrendering'>View Conditional Rendering</Link>
            <br />
            <Link to='/eventhandlers'>View Event Handlers</Link>
            <br />
            <Link to='/forms'>View Forms</Link>
            <br />
            <Link to='/stateuplifting'>View State Uplifitng</Link>
            <br />
            <Link to='/usecallback'>View UseCallback</Link>
            <br />
            <Link to='/useeffect'>View UseEffect</Link>
            <br />
            <Link to='/imperativehandler'>View UseImperativeHandle</Link>
            <br />
            <Link to='/usememo'>View UseMemo</Link>
            <br />
            <Link to='/usereducer'>View UseReducer</Link>
            <br />
            <Link to='/useref'>View UseRef</Link>
            <br />
            <Link to='/usestate'>View UseState</Link>
            <br />
            <Link to='/counter'>View Redux Toolkit Counter</Link>
        </>
    )
}

export default Home;