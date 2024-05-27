import { Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export const People = ({navigate,searchData,setSearchData}) => {
    const {id} = useParams();

    const searchIdInAPI = async () => {
        try {
            const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
            setSearchData(response.data);
        } catch (error) {
            navigate('/error')
        }
    }
    
    (id !== undefined) && searchIdInAPI();

    const {name,height,mass,hair_color} = searchData;
    return (
        (searchData.length===0) ? <Fragment></Fragment> :
        <div>
            <h2>People</h2>
            <ul>
                <li>Name: {name}</li>
                <li>Height: {height}</li>
                <li>Mass: {mass}</li>
                <li>Hair Color: {hair_color}</li>
            </ul>
        </div>
    );
    }

