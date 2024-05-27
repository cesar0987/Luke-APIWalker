import React, { Fragment } from 'react';

export const Species = ({searchData}) => {
    const {name,classification,designation,average_height} = searchData;
    return (
        (searchData.length===0) ? <Fragment></Fragment> :
        <div>
            <h2>Species</h2>
            <ul>
                <li>Name: {name}</li>
                <li>Classification: {classification}</li>
                <li>Designation: {designation}</li>
                <li>Average Height: {average_height}</li>
            </ul>
        </div>
    );
    }
