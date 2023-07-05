import React from 'react'
import "./Uploadstyle.css";
import Verifyseccard from '../cards/Uploadpage/VerifysecCard';



function RejectedSection() {

  const cardarr = [
    {
      "img" : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/short-story-thumbnail-design-template-c8d3daba0e4410fb1f3d7876bb2796b3_screen.jpg?ts=1589979453",
      "title" : "Animate ShortFilm",
      "like"  : "3.01K",
    },
    {
      "img" : "https://i.ytimg.com/vi/gZp2x5k_9YI/maxresdefault.jpg",
      "title" : "Singsot",
      "like"  : "34.01K",
    },
    {
      "img" : "https://filmfreeway-production-storage-01-storage.filmfreeway.com/projects/project_stills/002/027/318/original/AALY-Thumbnail-Oct-2020.jpg?1602488049",
      "title" : "AALY",
      "like"  : "2.91K",
    }
  ]

  return (
    <div className='rejectpagemainDiv'>
      {cardarr?.map((item,i)=>{
        return(
          <div key={i} className='rejectedmainDiv'>
            <Verifyseccard item={item}/>
            <div  className='reject_reason_div'>
              <b>Reason For Rejection</b>
               <ol type='1' className='reject_reason_lists'>
                  <li>Loreum Ipsum Loreum IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum
                      IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum Ipsum</li>
                  <li>Loreum Ipsum Loreum IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum 
                     IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum IpsumLoreum Ipsum</li>
               </ol>
            </div>
          </div>)
        })}
    </div>
  )
}

export default RejectedSection