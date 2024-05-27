import React, { Fragment } from 'react';

export const Films = ({searchData}) => {
    const {title,episode_id,opening_crawl,director,producer,release_date} = searchData;
    return (
        (searchData.length===0) ? <Fragment></Fragment> :
        <div>
            <h2>Films</h2>
            <ul>
                <li>Title: {title}</li>
                <li>Episode ID: {episode_id}</li>
                <li>Opening Crawl: {opening_crawl}</li>
                <li>Director: {director}</li>
                <li>Producer: {producer}</li>
                <li>Release Date: {release_date}</li>
            </ul>
        </div>
    );
    }
