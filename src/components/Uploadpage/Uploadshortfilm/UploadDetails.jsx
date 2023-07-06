import React from 'react'
import "./uploadShortFilm.css"
function UploadDetails() {
  return (
    <div className='upload_popup_inside'>
        <b>Details</b>

        <div class="label-float">
        <input type="text" placeholder=" " required/>
        <label>Username*</label>
        </div>

        <div class="label-float">
        <textarea type="text" placeholder=" " required/>
        <label>Description*</label>
        </div>


    </div>
  )
}

export default UploadDetails