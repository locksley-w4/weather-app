import React from 'react';
import cl from "./MyInput.module.css";

const MyInput = (props) => {
    return (
        <input {...props} type='text' className={cl.myInput} />            
    );
}


export default MyInput;
