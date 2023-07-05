import React from 'react'
import ApprovedCard from '../cards/Uploadpage/ApprovedCard'

function ApprovedSection() {

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
   
    }]
  return (
    <div className='verifiy-CardsSection'>
    {cardarr?.map((item,id)=>{
      return(
        <ApprovedCard item={item} />
      )
    })}
  </div>

  )
}

export default ApprovedSection