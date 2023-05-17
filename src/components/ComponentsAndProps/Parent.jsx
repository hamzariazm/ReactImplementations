import Child from "./Child";

const Parent = () => {

    const listOfChildren = [{name: "hamza", childNo: "Child1"}, {name: "Riaz", childNo: "Child 2"}, {name: "HAmzaaaa", childNo: "child 3"}];

    const parentEvent = () => {
        console.log("parent event")
    }

    return(
        <div>
            <h3>Parent Component</h3>
            {listOfChildren.map((child, key) => 
                <div key={key} onClick={parentEvent}>
                    <Child props={child}></Child>
                </div>
            )}
        </div>
    )

}

export default Parent;