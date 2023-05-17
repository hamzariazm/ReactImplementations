import { useEffect, useState } from "react";
import { fetchBio } from "./api.js";

const useFetchBio = (person, setBio) => {
    useEffect(()=>{
        setBio(null);
        setTimeout(async () => {
            const result = await fetchBio(person);
                    setBio(result);
        }, 500);


    }, [person, setBio])
}

const UseEffectExample = () => {

    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState("");

    const handleChange = (e) => {
        setPerson(e.target.value);
    }

    useFetchBio(person, setBio);
 
    return(
        <>
            <select value={person} onChange={handleChange}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Hamza">Hamza</option>
            </select>
            <p><i>{bio ?? "Loading....."}</i></p>
        </>
    )
}

export default UseEffectExample;