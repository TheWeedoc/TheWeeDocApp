import React from "react";
import ApprovedCard from "../cards/Uploadpage/ApprovedCard";
import ApprovedAdsCard from "../cards/Uploadpage/ApprovedAdsCard";
import { useSelector } from "react-redux";

function ApprovedSection() {
  const { approved } = useSelector((state) => state.uploads);

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

      {approved?.results?.length > 0 ? (
        <div className="flex justify-start py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-8 custom-lg:gap-x-8 lg:gap-y-8 grid-rows-auto">
            {approved?.results?.map((item, id) => (
              <ApprovedCard item={item} key={id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex text-center py-6 text-white">No results found</div>
      )}

      {/* <h3 className="verifiedHeadin pt-2">Approved Advertisements</h3>
      <div className="flex justify-start py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-4 custom-lg:gap-x-4 lg:gap-y-8 grid-rows-auto">
          {cardarr?.map((item, id) => {
            return <ApprovedAdsCard item={item} key={id} />;
          })}
        </div>
      </div> */}
    </div>
  );
}

export default ApprovedSection;
