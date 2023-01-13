import React from 'react';
import './Button.css';

export default function Button ({
    width,
    backgroundColor, 
    color,
    border,
    font,
    fontSize,
    fontWeight,
    borderRadius,
    margin,
    children,
    addNewNote
}){

    const options = {
        width,
        backgroundColor,
        color,
        border,
        fontFamily: font,
        fontSize,
        fontWeight,
        borderRadius,
        margin,
    };

    return(
        <button 
            style={options}
            onClick={addNewNote}
            className='button'>
                {children? children: 'Save'}
        </button>
    )
}