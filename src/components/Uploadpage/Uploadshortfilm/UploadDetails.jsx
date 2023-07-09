import React,{useState,useEffect} from 'react'
import "./uploadShortFilm.css"
import { Select } from 'antd';
function UploadDetails() {

  const options = [
     "Action",
     "Drama",
     "Thirller",
     "Romance",
     "Comedy",  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = options.filter((o) => !selectedItems.includes(o))

  return (
    <div className='upload_popup_inside'>
        <b>Details</b>

        <div className="label-float">
        <input type="text" placeholder=" " required/>
        <label>Title Name*</label>
        </div>

        <div className="label-float">
        <textarea type="text" placeholder="Write a attractive description about the short film..." required/>
        <label>Description*</label>
        </div>

        <div className='uplod_genre_div'>
          <label>Genre* </label>
        
          <Select
              mode="multiple"
              placeholder="Inserted are removed"
              value={selectedItems}
              onChange={setSelectedItems}
              style={{
                width: '100%',
              }}
              options={filteredOptions.map((item) => ({
                value: item,
                label: item,
              }))}
            />    
        </div>

        <div className='uplod_genre_div'>
          <label>Language* </label>
        
          <Select
              mode="multiple"
              placeholder="Inserted are removed"
              value={selectedItems}
              onChange={setSelectedItems}
              style={{
                width: '100%',
              }}
              options={filteredOptions.map((item) => ({
                value: item,
                label: item,
              }))}
            />    
        </div>

        <div className='uplod_genre_div'>
          <label>Age Barrier*</label>
         <div className='div_checkbox'><input type='radio' name='a'/> <span>Below 13 years</span> </div>
         <div className='div_checkbox'><input type='radio'name='a'/> <span>Above 13 years</span> </div>
         <div className='div_checkbox'><input type='radio' name='a'/> <span>Above 18 years</span> </div>

        </div>

    </div>
  )
}

export default UploadDetails