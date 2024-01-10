import React, { useState } from "react";
import "./uploadShortFilm.css";
import { Spin, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { AddProduct } from "../../../Api/Fetchclient";
import { DragZone } from "./DragZone";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../../../store/Home/Loader";
import Loader from "../../loader/Loader";
function UploadVideo({
  current,
  onNext,
  onPrev,
  formData,
  setResult,
  resulted,
}) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.common.isLoading);

  const [selectedFiles, setSelectedFiles] = useState({
    image: null,
    video: null,
  });
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const [load, setLoad] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 14,
        color: "black",
      }}
      spin
    />
  );

  const handleFileUpload = (sfiles, name) => {
    const file = sfiles[0];

    if (file) {

      const fileSizeInBytes = file.size;
      const fileSizeInGB = fileSizeInBytes / (1024 * 1024 * 1024);
  
      // Check if file size is above 2 GB
      if (fileSizeInGB > 2) {
        message.error('File size exceeds 2 GB. Please choose a smaller file.')
        // Show warning message or handle it as needed
        console.log("File size exceeds 2 GB. Please choose a smaller file.");
        return;
      }
  
      // Set the selected file
      setSelectedFiles({ ...selectedFiles, [name]: file });
      // Reset any previous error messages
      if (name === "image") setImageError(false);
      if (name === "video") setVideoError(false);
    }
  };
  

  // API CALL

  const result = async (data) => {
    dispatch(startLoading());
    try {
      const response = await AddProduct(data);
      console.log("Login response", response);
      setLoad(false);
      if (response?.status === 200 || response?.status === 201) {
        console.log("Response Add Prods", response);
        setResult({
          ...resulted,
          id: response.data?.id,
          name: response.data?.title,
        });
        onNext();
        dispatch(stopLoading());
      }
      if (
        response?.status === 404 ||
        response?.status === 401 ||
        response?.status === 400
      ) {
        const errorData = response.data;
        if (errorData?.title) {
          setErrMessage(errorData?.title[0]);
          message.error(errorData?.title[0])
        }
        setErrMessage(errorData?.[0]);

        dispatch(stopLoading());
        console.log(errorData);
      }
    } catch (error) {
      if (error && error.data) {
        const errorData = error.data;
        setErrMessage(errorData);
        dispatch(stopLoading());
      }
    }
  };

  const handleNext = async () => {
    // console.log(selectedFiles);
    // Check if both image and video are selected
    if (!selectedFiles.image || !selectedFiles.video) {
      if (!setSelectedFiles.image) setImageError(true);
      if (!setSelectedFiles.video) setVideoError(true);
      return;
    }
    setLoad(true);
    console.log(formData, "fData");

    const formDataForApi = new FormData();
    formDataForApi.append("title", formData.title);
    formDataForApi.append("description", formData.description);
    formDataForApi.append("genere", formData.genere);
    formDataForApi.append("language", formData.language);
    formDataForApi.append("age", formData.age);
    if (selectedFiles.image) {
      formDataForApi.append("image", selectedFiles.image);
    }
    if (selectedFiles.video) {
      formDataForApi.append("video", selectedFiles.video);
    }

    await result(formDataForApi);
  };

  return (
    <>
      {isLoading ? (
        <div className="outer-loader-space">
          <Loader
            text="Wait for Sometime. Your video has been uploading... "
            description="Don't close the popup while uploading the video; otherwise, your data will be lost."
          />
        </div>
      ) : (
        <div className="upload_popup_inside">
          <b>Images & Videos</b>

          <div className="upld_img space-y-4">
            <span className="upload_img_txt mb-2">Thumbnail Image*</span>
            <DragZone
              name={"image"}
              onFileChange={handleFileUpload}
              inst1={"Image should be in HD quality."}
              inst2={"Image Dimension : 210*275"}
              inst3={
                "Please be sure not to violate other’s copyright or privacy rights."
              }
              accept={"image/*"}
            />
            {imageError && (
              <span className="error-message">Please select an image.</span>
            )}
          </div>
          <div className="upld_img space-y-4">
            <span className="upload_img_txt mb-2">Video*</span>
            <DragZone
              name={"video"}
              onFileChange={handleFileUpload}
              inst1={"Video should be in HD quality."}
              inst2={"Video duration can be maximum of 39 minutes"}
              inst3={
                "Please be sure not to violate other’s copyright or privacy rights."
              }
              accept={"video/*"}
            />
            {videoError && (
              <span className="error-message">Please select a video.</span>
            )}
          </div>
          {errMessage && <h1 className="text-red text-center">{errMessage}</h1>}

          <div className="uploadpopup_btm">
            {current > 0 && <button onClick={onPrev}>Previous</button>}

            {current === 1 && (
              <button onClick={handleNext} className="loginbtn">
                {load ? <Spin indicator={antIcon} /> : "Next"}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default UploadVideo;
