import React, { useState } from "react";
import "./uploadShortFilm.css";
import { AddUploadBtn } from "../../../Assests/Svg/Commonsvg";
import { AddCast } from "../../../Api/Fetchclient";
import { getSearchUsers } from "../../../store/Home/Search/searchReducer";
import { useDispatch, useSelector } from "react-redux";
import confetti from "../../../Assests/Images/confetti.png";

function Uploadcast({ current, onNext, onPrev, resulted, setResult }) {
  const [load, setLoad] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");
  const [suggestion, setSuggestion] = useState(true);
  const [success, setSuccess] = useState(false);
  const { searchUserResults } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!userId || !role) {
      setErrMessage("Fill the required fields");
    } else if (userId && role) {
      setLoad(true);
      const formDataForApi = new FormData();
      formDataForApi.append("user", userId);
      formDataForApi.append("role", role);

      await apiResult(formDataForApi);

      const newData = [...data, { user: userId, name: username, role }];
      setData(newData);
      setUserId("");
      setRole("");
      setUsername("");
    }
  };

  const handleAutoComplete = (e) => {
    e.preventDefault();
    setSuggestion(true);
    const searchKey = e.target.value;
    setUsername(searchKey);
    dispatch(getSearchUsers(searchKey));
  };
  const handleUserId = (id, name) => {
    setUserId(id);
    setUsername(name);
    setSuggestion(false);
  };

  const apiResult = async (data) => {
    try {
      const response = await AddCast(resulted.id, data);
      console.log("Cast response", response);
      setLoad(false);
      if (response?.status === 200 || response?.status === 201) {
        console.log("Response Cast Prods", response);
        setResult({
          ...resulted,
          success: true,
        });
      }
      if (response?.status === 404) {
        const errorData = response.data;
        setErrMessage(errorData);
        console.log(errorData);
      }
      if (response?.status === 401) {
        setErrMessage(response.data);
      }
    } catch (error) {
      if (error && error.data) {
        const errorData = error.data;
        setErrMessage(errorData);
      }
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.length > 0) setSuccess(true);
  };

  return success ? (
    <div className="h-full w-full flex flex-col justify-center items-center bg-[#16181f] text-white py-10">
      <img src={confetti} alt="confetti" />
      <div>
        {resulted.name} Short Film has been submitted for verification
        Successfully!
      </div>
    </div>
  ) : (
    <div className="upload_popup_inside">
      <b>Cast & Crew</b>

      <div className="rolecastDiv">
        <div className="relative">
          <input
            type="text"
            value={username}
            onChange={handleAutoComplete}
            placeholder="User ID"
          />
          {searchUserResults.count > 0 && suggestion && (
            <div className="absolute h-24 overflow-y-scroll border border-gray-400 top-10 left-0 text-white bg-black ">
              {searchUserResults.results?.map((item) => (
                <div
                  className="p-2 hover:bg-[#16181f] hover:font-semibold cursor-pointer"
                  onClick={() => handleUserId(item.id, item.username)}
                  key={item.id}
                >
                  {item?.username}
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
        />
      </div>
      <button
        className="castAddBtn"
        onClick={handleAdd}
        disabled={load ? true : false}
      >
        {AddUploadBtn} Add
      </button>
      {load && <h1 className="text-white">Loading...</h1>}

      <div type="1" className="upld_rolecast_list py-4 space-y-4 text-white ">
        {data.map((item, index) => (
          <div key={item.user} className="flex flex-row items-center">
            User ID: {item.user}, Name: {item.name} , Role: {item.role}{" "}
          </div>
        ))}
      </div>
      <div className="uploadpopup_btm">
        {current > 0 && <button onClick={onPrev}>Previous</button>}

        <button onClick={handleSubmit} className="loginbtn">
          Submit
        </button>
      </div>
      {errMessage && (
        <div className="text-center">
          <span className="text-[#770000] font-semibold text-lg font-notosans">
            {errMessage.detail}
          </span>
        </div>
      )}
    </div>
  );
}

export default Uploadcast;
