import { useMemo, useState } from "react";

const UseMemoExample = () => {
    const [num, setNum] = useState(0);
    const [show, setShow] = useState(false);

    const getValue = () => {
        setNum(num + 1);
    }

    const countNum = () => {
        for(let i = 0; i < 1000000000; i++){}
        return num;
    }

    // const checkData = countNum(num);
    const checkData = useMemo(()=>{
        return countNum(num);
    }, [num]);

    return (
        <>
          <button onClick={getValue}>
            Counter
          </button>
          <p> My new number : {checkData} </p>
          <button onClick={() => setShow(!show)}>
            {show ? "You clicked me" : "Click me plz"}
          </button>
        </>
    );
}

export default UseMemoExample;