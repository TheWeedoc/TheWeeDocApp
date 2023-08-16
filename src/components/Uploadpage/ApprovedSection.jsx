import React from "react";
import ApprovedCard from "../cards/Uploadpage/ApprovedCard";
import ApprovedAdsCard from "../cards/Uploadpage/ApprovedAdsCard";

function ApprovedSection() {
  const cardarr = [
    {
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/short-story-thumbnail-design-template-c8d3daba0e4410fb1f3d7876bb2796b3_screen.jpg?ts=1589979453",
      title: "Animate ShortFilm",
      like: "3.01K",
    },
    {
      img: "https://i.ytimg.com/vi/gZp2x5k_9YI/maxresdefault.jpg",
      title: "Singsot",
      like: "34.01K",
    },
    {
      img: "https://filmfreeway-production-storage-01-storage.filmfreeway.com/projects/project_stills/002/027/318/original/AALY-Thumbnail-Oct-2020.jpg?1602488049",
      title: "AALY",
      like: "2.91K",
    },
  ];
  return (
    <div className="flex flex-col">
      <h3 className="verifiedHeadin pt-2">Approved Films</h3>

      <div className="flex justify-center py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-4 custom-lg:gap-x-4 lg:gap-y-8 grid-rows-auto">
          {cardarr?.map((item, id) => {
            return <ApprovedCard item={item} key={id} />;
          })}
        </div>
      </div>
      <h3 className="verifiedHeadin pt-2">Approved Advertisements</h3>
      <div className="flex justify-center py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-4 custom-lg:gap-x-4 lg:gap-y-8 grid-rows-auto">
          {cardarr?.map((item, id) => {
            return <ApprovedAdsCard item={item} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ApprovedSection;
