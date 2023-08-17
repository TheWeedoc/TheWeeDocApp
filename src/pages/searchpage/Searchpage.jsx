import React, { useEffect, useState } from "react";
import "./Searchpage.css";
import { Input, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { closeicons, searchicon } from "../../Assests/Svg/Commonsvg";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../store/Home/adhocReducer";
import {
  getSearchFilms,
  getSearchUsers,
} from "../../store/Home/Search/searchReducer";
import SearchCard from "../../components/cards/Search/SearchCard";
import SearchUserCard from "../../components/cards/Search/SearchUserCard";
function Searchpage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.adhoc);
  const { searchFilmResults, searchUserResults } = useSelector(
    (state) => state.search
  );
  const [search, setSearch] = useState({
    type: "films",
    genreName: "",
    genre: "",
  });

  const handleOptionClick = (option) => {
    setSearch({ ...search, genre: option.id, genreName: option.name });
  };

  const handleToggle = (option) => {
    setSearch({ ...search, type: option });
  };

  const handleSearch = (e) => {
    const newSearchText = e.target.value;
    if (search.type === "films" && newSearchText !== "") {
      let updatedQuery = { ...search, searchKey: newSearchText };
      console.log(updatedQuery);
      dispatch(getSearchFilms(updatedQuery));
    }

    if (search.type === "user" && newSearchText !== "") {
      dispatch(getSearchUsers(newSearchText));
    }

    // setSearch({...search,searchKey: searchText})
  };

  // const Genrelist = ["Action", "Drama", "Thirller", "Comedy", "Romance"];

  const cardarr = [
    {
      id: "1",
      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Pen",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
    {
      id: "2",

      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Iragu",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Pen",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
    {
      id: "4",

      image:
        "https://res.cloudinary.com/dwku5ukpm/image/upload/v1689315175/weedoc/videos/Speak_Out%21/image/osrqoqcx0ujdrj6wlos3.jpg",
      title: "Iragu",
      likes: ["3.01K"],
      dislikes: ["3.01K"],
      age: "13",
      genere: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    },
  ];

  useEffect(() => {
    if (genres.length === 0) dispatch(getGenres());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full p-4 md:p-10 lg:p-20">
      <div className="flex flex-row justify-between font-notosans items-center text-white">
        <h2>What are you seeking for?</h2>
        <div
          onClick={() => navigate(-1)}
          className="flex float-right items-center cursor-pointer "
        >
          <div
            style={{
              display: "inline-block",
              borderRadius: "50%",
              backgroundColor: "#1e1f21",
              padding: "6px",
            }}
          >
            {closeicons}
          </div>
          <div className="pl-2">Close</div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row w-full bg-headerBackground text-white space-y-3 md:space-y-0 py-3">
          <div className="flex justify-center md:w-2/6 md:items-center md:justify-center md:flex">
            {/* <ToggleSwitch /> */}
            <div className="flex items-center w-4/5 font-notosans border border-[#4a4949] rounded-md">
              <Button
                className={`w-full  rounded-r-md border-none  ${
                  search.type === "films"
                    ? "bg-[#21222d] text-white "
                    : "text-[#c5c5c5]"
                }`}
                onClick={() => handleToggle("films")}
              >
                Films
              </Button>
              <Button
                className={`w-full rounded-l-md  border-none hover:text-white ${
                  search.type === "user"
                    ? "bg-[#21222d] text-white focus:outline-none "
                    : "text-[#c5c5c5]"
                }`}
                onClick={() => handleToggle("user")}
              >
                UserId
              </Button>
            </div>
          </div>

          <div className="md:flex md:w-4/6 md:items-center">
            <Input
              size="large"
              placeholder="Search short films, uploader’s name, etc...  "
              prefix={searchicon}
              className="w-full"
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="flex justify-start items-center py-6">
          {/* <OptionButton options={genres} /> */}
          <div className="flex flex-wrap gap-2  font-notosans  ">
            {genres.map((option) => (
              <Button
                key={option.id}
                type={search.genre === option ? "default" : "border "}
                className={` py-1 px-3 rounded-lg ${
                  search.genre === option.id
                    ? "border bg-white text-black "
                    : "text-white border border-[#515151]"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.name}
              </Button>
            ))}
          </div>
        </div>
        {/* Films Search component */}
        {search.type === "films" && (
          <div className="">
            {searchFilmResults.count > 0 && (
              <h1 className="font-bold text-lg text-white py-6">
                {searchFilmResults.count} Results found{" "}
                {search.genre !== "" && `for "${search.genreName}"`}
              </h1>
            )}

            {searchFilmResults.message !== "" && (
              <div>
                <div className="text-center font-notosans font-bold text-lg md:text-xl lg:text-2xl py-10 text-white">
                  {searchFilmResults.message}
                </div>
              </div>
            )}

            <div className="flex justify-center py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-4 custom-lg:gap-x-4 lg:gap-y-8 grid-rows-auto">
                {searchFilmResults.results?.map((item) => (
                  <SearchCard item={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* User Search component */}
        {search.type === "user" && (
          <div className="">
            {searchUserResults.count > 0 && (
              <h1 className="font-bold text-lg text-white py-6">
                {searchUserResults.count} People found{" "}
                {/* {search.genre !== "" && `for "${search.genreName}"`} */}
              </h1>
            )}

            {searchUserResults.message !== "" && (
              <div>
                <div className="text-center font-notosans font-bold text-lg md:text-xl lg:text-2xl py-10 text-white">
                  {searchUserResults.message}
                </div>
              </div>
            )}

            <div className="flex justify-center py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-4 custom-lg:gap-x-4 lg:gap-y-8 grid-rows-auto">
                {searchUserResults.results?.map((item) => (
                  <SearchUserCard item={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchpage;
