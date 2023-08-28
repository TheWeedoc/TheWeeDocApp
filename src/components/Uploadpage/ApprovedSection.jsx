import React from "react";
import ApprovedCard from "../cards/Uploadpage/ApprovedCard";
import { useSelector } from "react-redux";

function ApprovedSection() {
  const { approved } = useSelector((state) => state.uploads);

  return (
    <div className="flex flex-col">
      <h3 className="verifiedHeadin pt-9 pb-12">Approved Films</h3>

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
