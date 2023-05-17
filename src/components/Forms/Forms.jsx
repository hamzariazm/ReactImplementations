const Forms = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}> 

                <progress value={null}></progress>

                <br />
                <br />

                <label htmlFor="userName">Username: </label>
                <input name="userName" type="text"></input>

                <br />
                <br />

                <label htmlFor="age">Age: </label>
                <input name="age" type="number"></input>

                <br />
                <br />

                <label htmlFor="email">Email: </label>
                <input name="email" type="email"></input>

                <br />
                <br />

                <label>Graduated: </label>
                <input name="graduated" type="checkbox"/>
                
                <br />
                <br />

                <label htmlFor="select">Fruit: </label>
                <select name="favouriteColour" defaultValue="blue">
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </select>

                <br />
                <br />

                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
                
            </form>

        </div>
    )
}

export default Forms;