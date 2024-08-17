import React, { useEffect, useState, useCallback } from "react";
import "./Searchpage.css";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { closeicons } from "../../Assests/Svg/Commonsvg";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../store/Home/adhocReducer";
import {
  getSearchFilms,
  getSearchUsers,
} from "../../store/Home/Search/searchReducer";
import SearchCard from "../../components/cards/Search/SearchCard";
import SearchUserCard from "../../components/cards/Search/SearchUserCard";
import { SearchOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";
import debounce from "lodash/debounce";

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
    searchKey: "",
  });

  const handleOptionClick = (option) => {
    const isSameGenre = search.genre === option.id;

    const updatedSearch = {
      ...search,
      genre: isSameGenre ? "" : option.id,
      genreName: isSameGenre ? "" : option.name,
      searchKey: isSameGenre ? "" : option.name,
    };

    setSearch(updatedSearch);

    if (search.type === "films") {
      dispatch(getSearchFilms(updatedSearch));
    }
  };

  const handleToggle = (option) => {
    setSearch({ ...search, type: option });
  };

  const debouncedSearch = useCallback(
    debounce((newSearchText) => {
      if (search.type === "films" && newSearchText !== "") {
        let updatedQuery = { ...search, searchKey: newSearchText };
        dispatch(getSearchFilms(updatedQuery));
      }

      if (search.type === "user" && newSearchText !== "") {
        dispatch(getSearchUsers(newSearchText));
      }
    }, 300),
    [dispatch, search.type, search.genre]
  );

  const handleSearch = (e) => {
    const newSearchText = e.target.value;
    setSearch({ ...search, searchKey: newSearchText });
    debouncedSearch(newSearchText);
  };

  const handleRefreshSearch = () => {
    if (search.searchKey) dispatch(getSearchUsers(search.searchKey));
  };

  useEffect(() => {
    if (genres.length === 0) dispatch(getGenres());
  }, [dispatch, genres.length]);

  return (
    <>
      <Helmet>
        <title>Search - TheWeedoc</title>
      </Helmet>

      <div className="w-full p-4 md:px-10 md:py-3 lg:px-20 lg:py-6">
        <div className="flex flex-row justify-between font-notosans items-center text-white">
          <h2 className="searchTopText py-2">What are you seeking for?</h2>
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
            <div className="pl-2 font-bold">Close</div>
          </div>
        </div>

        <div className="flex flex-col pt-5 md:pt-10 ">
          <div className="flex flex-col md:flex-row w-full bg-headerBackground text-white space-y-3 md:space-y-0 py-3">
            <div className="flex justify-center md:w-2/6 md:items-center md:justify-center md:flex">
              <div className="flex items-center w-4/5 font-notosans border border-[#4a4949] rounded-md">
                <button
                  className={`w-full button-toggle rounded-r-md border-none py-1 rounded-md ${
                    search.type === "films"
                      ? "bg-[#21222d] text-white "
                      : "text-[#c5c5c5]"
                  }`}
                  onClick={() => handleToggle("films")}
                >
                  Films
                </button>
                <button
                  className={`w-full button-toggle rounded-l-md py-1 rounded-md border-none hover:text-white ${
                    search.type === "user"
                      ? "bg-[#21222d] text-white focus:outline-none "
                      : "text-[#c5c5c5]"
                  }`}
                  onClick={() => handleToggle("user")}
                >
                  User ID
                </button>
              </div>
            </div>

            <div className="md:flex md:w-4/6 md:items-center">
              <Input
                size="large"
                placeholder="Search short films, uploader’s name, etc...  "
                prefix={<SearchOutlined />}
                className="w-full bg-transparent"
                onChange={handleSearch}
                value={search.searchKey}
              />
            </div>
          </div>
          {search.type === "films" && (
            <div className="flex justify-start items-center py-6">
              <div className="flex flex-wrap gap-6 font-notosans">
                {genres.map((option) => (
                  <Button
                    key={option.id}
                    type={search.genre === option.id ? "default" : "border"}
                    className={`py-1 px-3 rounded-lg ${
                      search.genre === option.id
                        ? "border bg-white text-[#212121] text-genre font-semibold"
                        : "text-[#C5C5C5] border border-[#515151] border-2"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.name}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Films Search component */}
          {search.type === "films" && (
            <div className="">
              {searchFilmResults.count > 0 && (
                <h1 className="font-bold text-lg text-white py-6">
                  {searchFilmResults.count} Results found for{" "}
                  {search.searchKey && `"${search.searchKey}"`}{" "}
                  {search.genre !== "" && `and "${search.genreName}"`}
                </h1>
              )}

              {searchFilmResults.message !== "" && (
                <div>
                  <div className="text-center font-notosans font-bold text-lg md:text-xl lg:text-2xl py-10 text-white">
                    {searchFilmResults.message}
                  </div>
                </div>
              )}

                <div className="list_videos">
                  {searchFilmResults.results?.map((item) => (
                    <SearchCard item={item} key={item.id} />
                  ))}
                </div>
              </div>
          )}

          {/* User Search component */}
          {search.type === "user" && (
            <div className="">
              {searchUserResults.count > 0 && (
                <h1 className="font-bold text-lg text-white py-6">
                  {searchUserResults.count} People found
                </h1>
              )}

              {searchUserResults.message !== "" && (
                <div>
                  <div className="text-center font-notosans font-bold text-lg md:text-xl lg:text-2xl py-10 text-white">
                    {searchUserResults.message}
                  </div>
                </div>
              )}

              <div className="flex justify-start py-6">
                {searchUserResults.count > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 custom-lg:grid-cols-3 gap-4 custom-lg:gap-x-4 lg:gap-y-8 grid-rows-auto">
                    {searchUserResults.results?.map((item) => (
                      <SearchUserCard
                        item={item}
                        key={item.id}
                        refreshHandle={handleRefreshSearch}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Searchpage;
