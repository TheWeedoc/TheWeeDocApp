import React from "react";

function SearchUserCard({ item }) {
  return (
    <div className="flex flex-row space-x-4 items-center w-full ">
      <div className="w-1/4 flex items-center justify-center">
        <img
          src={item.profile_pic}
          alt="profile"
          className="rounded-full w-[80px] h-[80px] object-cover"
        />
        {/* <img
          src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI="
          alt="profile"
          className="rounded-full w-[80px] h-[80px] object-cover"
        /> */}
      </div>
      <div className="flex flex-col font-notosans space-y-3 w-3/4">
        <div>
          <h1 className="font-semibold text-white">{item.username}</h1>
        </div>
        <div>
          <h4 className="text-[#ccd1da]">{item.designation}</h4>
          {/* <h4 className="text-[#ccd1da]">Director</h4> */}
        </div>
        <div className="flex w-full justify-start items-center ">
          <button className="rounded-md bg-white px-6 py-1 ">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default SearchUserCard;
