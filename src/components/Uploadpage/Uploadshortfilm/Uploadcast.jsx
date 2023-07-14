import React,{useState,useEffect} from 'react'
import "./uploadShortFilm.css"
import { AddUploadBtn } from '../../../Assests/Svg/Commonsvg';
function Uploadcast({current,onNext,onPrev}) {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState('');
  const [role, setRole] = useState('');

  const handleAdd = () => {
    const newData = [...data, { userId, role }];
    setData(newData);
    setUserId('');
    setRole('');
  };

  return (
    <div className='upload_popup_inside'>
     <b>Cast & Crew</b>

     <div className='rolecastDiv'>
     <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Role"
      />
     </div>
     <button  className="castAddBtn" onClick={handleAdd}>{AddUploadBtn} Add</button>

       
       <ol type="1" className='upld_rolecast_list'>
        {data.map((item, index) => (
          <li key={index}>
            User ID: {item.userId}, Role: {item.role}
          </li>
        ))}
      </ol>
      <div className='uploadpopup_btm'>
          {current > 0 && (
            <button onClick={onPrev}>
              Previous
            </button>
          )}

            <button>
              Upload Video
            </button>
       
        </div>
    </div>
  )
}

export default Uploadcast