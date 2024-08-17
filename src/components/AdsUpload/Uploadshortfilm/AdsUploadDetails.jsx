import React, { useState, useEffect } from "react";
import "./AdsuploadShortFilm.css";
import { Select } from "antd";
function AdsUploadDetails({ onNext, formData, setFormData }) {
  const options = ["Action", "Drama", "Thirller", "Romance", "Comedy"];

  const [selectedItems, setSelectedItems] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [webLink, setWebLink] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    // Update the form data in the parent component
    const updatedFormData = {
      ...formData,
      title: title,
      description: description,
      keywords: selectedItems,
      weblink: webLink,
    };
    setFormData(updatedFormData);
  }, [title, description, selectedItems, webLink]);

  const handleNext = () => {
    // Validate the form fields
    const isTitleValid = !!title;
    const isDescriptionValid = !!description;
    const isKeywordsValid =
      selectedItems.length > 3 && selectedItems.length < 7;

    // If the form is submitted and any of the fields are empty, show the errors
    setIsFormSubmitted(true);

    // If any of the required fields are empty, prevent moving to the next step
    if (!isTitleValid || !isDescriptionValid || !isKeywordsValid) {
      return;
    }

    // Move to the next step
    onNext();
  };

  const filteredOptions = options.filter((o) => !selectedItems.includes(o));

  return (
    <div className="upload_popup_inside">
      <b>Details</b>

      <div className="label-float">
        <input
          type="text"
          placeholder=" "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Advertisement Name*</label>
        {isFormSubmitted && !title && (
          <span className="error-message">Name is required</span>
        )}
      </div>

      <div className="label-float">
        <textarea
          type="text"
          placeholder="Write a description about the Advertisement..."
          value={description}
          maxLength={200}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Description about advertisment* </label>
        {isFormSubmitted && !description && (
          <span className="error-message">Description is required</span>
        )}
      </div>

      <div className="uplod_genre_div">
        <label>*Keywords to help your ad perform (min 4- max 6) </label>

        <Select
          mode="multiple"
          placeholder="Inserted are removed"
          onChange={setSelectedItems}
          style={{
            width: "100%",
          }}
          options={filteredOptions.map((item) => ({
            value: item,
            label: item,
          }))}
        />
        {isFormSubmitted && selectedItems.length < 4 && (
          <span className="error-message">Minmum 4 Keywords are required</span>
        )}
        {isFormSubmitted && selectedItems.length > 6 && (
          <span className="error-message">
            You can select till 7 Keywords Only
          </span>
        )}
      </div>

      <div className="uplod_genre_div">
        <label style={{ fontSize: "15px" }}>
          Your website link or the page link you want to take your users when
          clicked on the ad{" "}
        </label>
        <input
          type="url"
          value={webLink}
          onChange={(e) => setWebLink(e.target.value)}
          className="upload_web_url"
          placeholder="Enter your website link"
        />
      </div>

      <div className="uploadpopup_btm">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default AdsUploadDetails;
