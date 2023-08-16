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

  const customRequestUpload = (options) => {
    setTimeout(() => {
      const { onSuccess, onError } = options;
      if (Math.random() > 0.5) {
        onSuccess("Upload successfully");
      } else {
        onError("Upload failed");
      }
    }, 1000);
  };

  const props = {
    name: "file",
    multiple: false,
    onChange(info) {
      const { name, type } = info.file;
      if (info.file.status === "uploading") {
        // Check if the file is an image
        if (type.startsWith("image/")) {
          const updatedFormData = {
            ...formData,
            image: info.file.originFileObj, // Store the image file in formData
          };
          setFormData(updatedFormData);
          setImageError(false);
          setVideoError(false); // Reset video error if image is being uploaded
        }
        // Check if the file is a video
        else if (type.startsWith("video/")) {
          const updatedFormData = {
            ...formData,
            video: info.file.originFileObj, // Store the video file in formData
          };
          setFormData(updatedFormData);
          setVideoError(false);
          setImageError(false); // Reset image error if video is being uploaded
        }
      } else if (info.file.status === "error") {
        message.error(`${name} file upload failed.`);
      } else {
        message.success(`${name} file uploaded successfully.`);
      }
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
        <Dragger
          {...props}
          accept="image/*"
          customRequest={customRequestUpload}
        >
          <div className="flex flex-col justify-center items-center py-4 px-6">
            <img src={UploadIcon} alt="upload" className="w-20" />
            <div className=" flex flex-col justify-center items-center text-left py-4">
              <p className="ant-upload-text">
                Drag and drop image files to upload
              </p>

              <div className=" px-2 py-1 bg-white  text-black font-semibold rounded-md my-4">
                Select Files
              </div>

              <ul className="image_upload_instr">
                <li>Image should be in HD quality.</li>
                <li>Image Dimension: 210*275</li>
                <li>
                  Please be sure not to violate others' copyright or privacy
                  rights.
                </li>
              </ul>
            </div>
          </div>
        </Dragger>
        {imageError && (
          <span className="error-message">Please select an image.</span>
        )}
      </div>
      <div className="upld_img">
        <span className="upload_img_txt">Video*</span>
        <Dragger
          {...props}
          accept="video/*"
          customRequest={customRequestUpload}
        >
          <div className="flex flex-col justify-center items-center py-4">
            <img src={UploadIcon} alt="upload" className="w-20" />

            <div className=" flex flex-col justify-center items-center text-left py-4">
              <p className="ant-upload-text">
                Drag and drop Video files to upload
              </p>
              <div className=" px-2 py-1 bg-white text-black font-semibold rounded-md my-4">
                Select Files
              </div>
              <ul className="image_upload_instr">
                <li>Video should be in HD quality.</li>
                <li>Video time duration should be 35 - 40 mins maximum</li>
                <li>
                  Please be sure not to violate other’s copyright or privacy
                  rights.
                </li>
              </ul>
            </div>
          </div>
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
