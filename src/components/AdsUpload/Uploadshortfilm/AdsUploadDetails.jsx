import React,{useState,useEffect} from 'react'
import "./AdsuploadShortFilm.css"
import { Select } from 'antd';
function AdsUploadDetails() {

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
        <label>Advertisement Name*</label>
        </div>

        <div className="label-float">
        <textarea type="text" placeholder="Write a description about the Advertisement..." required/>
        <label>Description about advertisment* </label>
        </div>

        <div className='uplod_genre_div'>
          <label>*Keywords to help your ad perform (min 4- max 6) </label>
        
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
        <label style={{fontSize:"15px"}}>Your website link or the page link you want to take your users when clicked on the ad </label>
        <input type="url" placeholder='Enter your website link' />
        </div>

    </div>
  )
}

export default AdsUploadDetails