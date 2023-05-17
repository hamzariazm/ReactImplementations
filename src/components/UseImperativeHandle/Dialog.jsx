import { forwardRef, useImperativeHandle, useRef } from "react";

const Dialog = ({isOpen, onClose}, ref) => {

    const confirmRef = useRef();
    const closeRef = useRef();
    const denyRef = useRef();

    useImperativeHandle(ref, () => {
        return{
            focusConfirmBtn: () => confirmRef.current.focus(),
            focusCloseBtn: () => closeRef.current.focus(),
            focusDenyBtn: () => denyRef.current.focus() 
        }
    })

    if(!isOpen) return <></>;
    
    return(
        <>
            <h1>Title</h1>
            <br />
            <p>Do you Confirm?</p>
            <br />
            <input type="text" placeholder="YES" ref={confirmRef}/>
            <input type="text" placeholder="NO" ref={denyRef}/>
            <input type="text" placeholder="CLOSE" ref={closeRef}/>

            <button onClick={onClose}>&times;</button>
        </>
    )
}

export default forwardRef(Dialog);