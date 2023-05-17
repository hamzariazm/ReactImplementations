const Child = (props) => {

    const eventBubble = (e) => {

        console.log("child event handler: " + props.props.name);
        if(props.props.name === "hamza"){
            e.stopPropagation();
        }
    }

    return(
        <div className="card">
            <div className="container">
                <h4 onClick={eventBubble}><b>Name: {props.props.name}</b></h4>
                <p>I am child: {props.props.childNo}</p>
            </div>
        </div>
    )
}
export default Child;