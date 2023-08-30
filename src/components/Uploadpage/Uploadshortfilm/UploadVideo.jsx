import React, { useState } from "react";
import "./uploadShortFilm.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { AddProduct } from "../../../Api/Fetchclient";
import { DragZone } from "./DragZone";

function UploadVideo({
  current,
  onNext,
  onPrev,
  formData,
  setResult,
  resulted,
}) {
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
    setSelectedFiles({ ...selectedFiles, [name]: sfiles[0] });
    // console.log(selectedFiles);
  };

  // API CALL

  const result = async (data) => {
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

    // Call API here using the updatedFormData
    await result(formDataForApi);
  };

  return (
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
          inst2={"Video time duration should be 35 - 40 mins maximum "}
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
  );
}

export default UploadVideo;
