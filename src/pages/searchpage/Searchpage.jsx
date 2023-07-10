import React from 'react'
import "./Searchpage.css"
import { Input } from 'antd';
import { useNavigate,Link } from 'react-router-dom';
import { closeicons, searchicon } from '../../Assests/Svg/Commonsvg';
function Searchpage() {

  const navigate = useNavigate();
  const Genrelist = [
    "Action",
    "Drama",
    "Thirller",
    "Romance",
    "Comedy",  ];
  
    
    
  return (
    <div className='searchmain'>
        <div className='searchTop-Div'>
            <h2>What are you seeking for?</h2>
            <div onClick={()=>navigate(-1)}>{closeicons} close</div>
        </div>

        <div className='searchbar-Div'>
        <Input size="large" placeholder="Search short films, uploader’s name, etc...  " prefix={searchicon} />
        <select className='search_genre'>
        {Genrelist?.map((item,id)=>{
              return(
                <option key={id}>{item}</option>
              )
            })}
        </select>
        </div>
    </div>
  )
}

export default Searchpage