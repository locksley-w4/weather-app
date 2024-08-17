import React from 'react';
import cl from "./MySelect.module.css"

const MySelect = ({options, ...props}) => {
    let optionElems =  (Object.keys(options) ?? []).map(key => (
        <option key={key} value={key}>{options[key]}</option>
    ));
    
    return (
        <select {...props} className={cl.mySelect}>
            {optionElems}
        </select>
    );
}


export default MySelect;
