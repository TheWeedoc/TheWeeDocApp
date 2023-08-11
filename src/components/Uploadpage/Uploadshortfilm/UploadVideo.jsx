import React, { useState, useEffect } from "react";
import "./uploadShortFilm.css";
import { message, Upload } from "antd";
import UploadIcon from "../../../Assests/Images/UploadIcon.png";

function UploadVideo({ current, onNext, onPrev, formData, setFormData }) {
  const { Dragger } = Upload;

  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Update the form data in the parent component
    const updatedFormData = {
      ...formData,
      video: "",
      image: "",
    };
    setFormData(updatedFormData);
  }, []);

  const props = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      console.log(info?.file, "info");
      const { status, name, type } = info.file;
      if (status === "uploading") {
       
        // Check if the file is an image
        if (type.startsWith("image/")) {
          const updatedFormData = {
            ...formData,
            image: info.file.originFileObj, // Store the image file in formData
          };
          setFormData(updatedFormData);
          setImageError(false);
        }
        // Check if the file is a video
        else if (type.startsWith("video/")) {
          const updatedFormData = {
            ...formData,
            video: info.file.originFileObj, // Store the video file in formData
          };
          setFormData(updatedFormData);
          setVideoError(false);
        }
      }else{
        message.success(`${name} file uploaded successfully.`);
      }
      //  else if (status === "error") {
      //   message.error(`${name} file upload failed.`);
      // }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleNext = () => {
    // Check if both image and video are selected
    if (!formData.image || !formData.video) {
      if (!formData.image) setImageError(true);
      if (!formData.video) setVideoError(true);
      return;
    }

    onNext();
  };

  return (
    <div className="upload_popup_inside">
      <b>Images & Videos</b>

      <div className="upld_img">
        <span className="upload_img_txt">Thumbnail Image*</span>
        <Dragger {...props} accept="image/*">
          <p className="ant-upload-drag-icon">
            <img src={UploadIcon} alt="upload" />
          </p>
          <p className="ant-upload-text">Drag and drop image files to upload</p>
          <ul className="image_upload_instr">
            <li>Image should be in HD quality.</li>
            <li>Image Dimension: 210*275</li>
            <li>
              Please be sure not to violate others' copyright or privacy rights.
            </li>
          </ul>
        </Dragger>
        {imageError && (
          <span className="error-message">Please select an image.</span>
        )}
      </div>
      <div className="upld_img">
        <span className="upload_img_txt">Video*</span>
        <Dragger {...props} accept="video/*">
          <p className="ant-upload-drag-icon">
            <img src={UploadIcon} alt="upload" />
          </p>
          <p className="ant-upload-text">Drag and drop Video files to upload</p>
        </Dragger>
        {videoError && (
          <span className="error-message">Please select a video.</span>
        )}
      </div>

      <div className="uploadpopup_btm">
        {current > 0 && <button onClick={onPrev}>Previous</button>}

        {current === 1 && <button onClick={handleNext}>Next</button>}
      </div>
    </div>
  );
}

export default UploadVideo;
