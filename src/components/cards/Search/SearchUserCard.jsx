import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import defaultProfile from "../../../Assests/Images/Defaultprofile.png";
import { followUserSearch } from "../../../store/Home/Search/searchReducer";

function SearchUserCard({ item, refreshHandle }) {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFollow = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(followUserSearch(item?.username)).then(() => {
        refreshHandle();
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <Link to={`/profile/${item?.id}`}>
      <div className="flex flex-row space-x-4 items-center w-full ">
        <div className="w-1/4 flex items-center justify-center">
          <img
            src={item?.profile_pic ? item?.profile_pic : defaultProfile}
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
            <h1 className="font-semibold text-white">{item?.username}</h1>
          </div>
          <div>
            <h4 className="text-[#ccd1da]">
              {item?.designation ? item?.designation : "No Designation"}{" "}
            </h4>
            {/* <h4 className="text-[#ccd1da]">Director</h4> */}
          </div>
          <div className="flex w-full justify-start items-center ">
            <button
              className="rounded-md bg-white px-6 py-1 "
              onClick={handleFollow}
            >
              {item?.is_following ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchUserCard;
