import React, { Fragment } from 'react';

export const Planets = ({searchData}) => {
    const {name,rotation_period,orbital_period,diameter,climate} = searchData;
    return (
        (searchData.length===0) ? <Fragment></Fragment> :
        <div>
            <h2>Planets</h2>
            <ul>
                <li>Name: {name}</li>
                <li>Rotation Period: {rotation_period}</li>
                <li>Orbital Period: {orbital_period}</li>
                <li>Diameter: {diameter}</li>
                <li>Climate: {climate}</li>
            </ul>
        </div>
    );
    }
