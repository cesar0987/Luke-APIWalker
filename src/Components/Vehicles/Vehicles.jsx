import React, { Fragment } from 'react';
export const Vehicles = ({searchData}) => {
    const {name,model,manufacturer,created} = searchData;
    return (
        (searchData.length===0) ? <Fragment></Fragment> :
        <div>
            {/*  Render a list of vehicle details including name, model, manufacturer, and created date. */}
 
            <h2>Vehicles</h2>
            <ul>
                <li>Name: {name}</li>
                <li>Model: {model}</li>
                <li>Manofacturer: {manufacturer}</li>
                <li>Created: {created}</li>
            </ul>
        </div>
    );
    }
