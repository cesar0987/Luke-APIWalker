import './App.css';
import { Routes, Route,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState} from 'react';
import Select from 'react-select';
import {People,Planets,Species,Films,Vehicles,Error} from '../index';
import profileImg from '../../img/user-profile-icon.webp';


function App() {
  const navigate = useNavigate();
  
  const [data,setData] = useState([]);
  const [searchData,setSearchData] = useState([]);
  
  
  const chargeSelection = async (e) => {
    navigate('/');
    setData([]);

    try {
      const response = await axios.get(`https://swapi.dev/api/${e.target.value}/`);
      setData(response.data.results);
      navigate(`/${e.target.value}`);
    } catch (error) {
      navigate('/error')
    }
    
  }
   console.log(data.length)
   console.log(data);
  const search = async (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    if(search === ""){
      return;
    }
    const result = data.find((item,index) => index === parseInt(search));
    setSearchData(result);
    
  }
  console.log(searchData);
  let maxSizeInput = data?.length-1;

  const options = [
    { value: 'people', label: <div><img src={profileImg} alt='people' style={{ width: '20px', marginRight: '10px' }} />People</div> },
    { value: 'planets', label: <div><img src={profileImg} alt='planets' style={{ width: '20px', marginRight: '10px' }} />Planets</div> },
    { value: 'films', label: <div><img src={profileImg} alt='films' style={{ width: '20px', marginRight: '10px' }} />Films</div> },
    { value: 'species', label: <div><img src={profileImg} alt='species' style={{ width: '20px', marginRight: '10px' }} />Species</div> },
    { value: 'vehicles', label: <div><img src={profileImg} alt='vehicles' style={{ width: '20px', marginRight: '10px' }} />Vehicles</div> },
    { value: 'starships', label: <div><img src={profileImg} alt='starships' style={{ width: '20px', marginRight: '10px' }} />Starships</div> }
  ];

  return (
    <div className="App">
      <nav>
        <h1>Star Wars</h1>
        <form onSubmit={search}>
        <Select 
            options={options}
            onChange={chargeSelection}
            styles={{ option: (provided) => ({ ...provided, display: 'flex', alignItems: 'center' }) }}
          />
        <label htmlFor="search">Search:</label>
        <input type="number" id="search" name="search" min={0} max={(maxSizeInput)} step="1" on/>
        <button>Search</button>
        </form>
      </nav>
      <Routes>
      <Route path='/'></Route>
      <Route path='/people/:id?' element={<People  setSearchData={setSearchData} searchData={searchData}/>}/>
      <Route path='/planets'element={<Planets searchData={searchData}/> }/>
      <Route path='/films' element={<Films searchData={searchData}/>}/>
      <Route path='/species' element={<Species searchData={searchData}/>}/>
      <Route path='/vehicles' element={<Vehicles searchData={searchData}/>}/>
      <Route path='/error' element={<Error navigate={navigate}/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
