import { useRef, useState } from "react";
import Dialog from "./Dialog";

const UseImperativeHandleExample = () => {

    const [showDialog, setShowDialog] = useState(false);
    const dialogRef = useRef();


    return(
        <>
            <button onClick={() => {setShowDialog(true)}}>Show Dialog</button>
            {showDialog &&
                <div>
                    <button onClick={() => dialogRef.current.focusConfirmBtn()}>Focus Confirm</button>
                    <button onClick={() => dialogRef.current.focusDenyBtn()}>Focus Deny</button>
                    <button onClick={() => dialogRef.current.focusCloseBtn()}>Focus Close</button>
                </div>
            }
            <Dialog
                ref={dialogRef}
                isOpen={showDialog}
                onClose={() => {setShowDialog(false)}}
            />
        </>
    )

}

export default UseImperativeHandleExample;