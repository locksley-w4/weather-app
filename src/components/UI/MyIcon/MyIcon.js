import React from 'react';
import cl from "./MyIcon.module.css";

const MyIcon = ({url, alt, ...props}) => {
    return (
        <span {...props} className={cl.myIcon} >
            <img src={url} alt={alt ?? ""}/>
        </span>
    );
}


export default MyIcon;
