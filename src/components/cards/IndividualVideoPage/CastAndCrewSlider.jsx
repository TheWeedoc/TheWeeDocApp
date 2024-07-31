import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
// const castAndCrewData = [
//   // Sample cast and crew data
//   { id: 1, name: 'Actor 1', role: 'Lead Actor', image: '/path-to-image.jpg' },
//   { id: 2, name: 'Actor 2', role: 'Supporting Actor', image: '/path-to-image.jpg' },
//   // ... more data
// ];

const CastAndCrewCarousel = ({ castAndCrewData }) => {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Adjust the following breakpoints and item counts based on your design needs
      if (screenWidth < 768) {
        setItemsPerPage(4);
      } else if (screenWidth < 1024) {
        setItemsPerPage(7);
      } else {
        setItemsPerPage(10);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setStartIndex(startIndex + itemsPerPage);
  };

  const handlePrevious = () => {
    setStartIndex(startIndex - itemsPerPage);
  };

  let defaultUser =
    "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";

  return (
    <div className="relative w-full">
      <div className="flex flex-row items-center space-x-4 overflow-x-auto">
        {castAndCrewData
          .slice(startIndex, startIndex + itemsPerPage)
          .map((member) => (
            <Tooltip
              key={member.id}
              title={
                member?.cast_member?.username ||
                member?.cast_member?.first_name ||
                "No Name"
              }
            >
              <div className="flex flex-col items-center cursor-pointer">
                <img
                  src={
                    member?.cast_member?.profile_pic === null
                      ? defaultUser
                      : member?.cast_member?.profile_pic
                  }
                  alt={member?.cast_member?.first_name}
                  className="w-20 h-20 rounded-full"
                />
                <p className="text-sm font-semibold mt-1 text-white w-20 text-center font-notosans truncate">
                  {member?.cast_member?.first_name}
                </p>
                <p className="text-xs text-gray-500 font-notosans">
                  {member?.role}
                </p>
              </div>
            </Tooltip>
          ))}
      </div>
      <div className="h-full">
        {startIndex > 0 && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full bg-gradient-to-r from-[#0a0a0d] to-transparent p-4"
            onClick={handlePrevious}
          >
            <span className="opacity-100 text-white text-xl font-bold">
              &lt;
            </span>
          </button>
        )}
        {startIndex + itemsPerPage < castAndCrewData.length && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full  bg-gradient-to-l from-[#0a0a0d] to-transparent p-4"
            onClick={handleNext}
          >
            <span className="opacity-100 text-white text-xl font-bold">
              &gt;
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CastAndCrewCarousel;
