import React, { useState, useEffect } from "react";
import "./uploadShortFilm.css";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../../store/Home/adhocReducer";
import { GetLanuages } from "../../../Api/Fetchclient";

function UploadDetails({ onNext, formData, setFormData }) {
  const { genres } = useSelector((state) => state.adhoc);
  const { Option } = Select;

  const [selectedItems, setSelectedItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [lang, setlang] = useState([])
  const [language, setLanguage] = useState();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Update the form data in the parent component
    const updatedFormData = {
      ...formData,
      title: title,
      description: description,
      genere: selectedItems.join(),
      languages: language,
      age: age,
    };
    setFormData(updatedFormData);
  }, [title, description, selectedItems, age, language]);

  const getlang = async ()=>{
    const reps = await GetLanuages().then((resp)=>{
      setlang(resp)
    })
  }

  useEffect(() => {
    if (genres.length === 0) dispatch(getGenres());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getlang()

  }, []);


  const handleNext = () => {
    // Validate the form fields
    const isTitleValid = !!title;
    const isDescriptionValid = !!description;
    const isGenreValid = selectedItems.length > 1;
    // const isGenreValid = selectedItems != 0;

    const isLanguageValid = !!language;
    const isAgeValid = !!age;

    // If the form is submitted and any of the fields are empty, show the errors
    setIsFormSubmitted(true);

    // If any of the required fields are empty, prevent moving to the next step
    if (
      !isTitleValid ||
      !isDescriptionValid ||
      !isGenreValid ||
      !isLanguageValid ||
      !isAgeValid
    ) {
      return;
    }

    // Move to the next step
    onNext();
  };

  return (
    <div className="upload_popup_inside">
      <b>Details</b>

      <div className={`label-float ${isFormSubmitted && !title && "error"}`}>
        <input
          type="text"
          placeholder=" "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Title Name*</label>
        <br />
        {isFormSubmitted && !title && (
          <span className="error-message">Title is required</span>
        )}
      </div>

      <div
        className={`label-float ${isFormSubmitted && !description && "error"}`}
      >
        <textarea
          type="text"
          placeholder=" "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Description*</label>
        {isFormSubmitted && !description && (
          <span className="error-message">Description is required</span>
        )}
      </div>

      <div className="uplod_genre_div">
        <label>Genre* </label>

        <Select
          mode="multiple"
          placeholder="Inserted are removed"
          // value={selectedItems}
          onChange={setSelectedItems}
          style={{
            width: "95%",
          }}
          options={genres.map((item) => ({
            value: item.id,
            label: item.name,
          }))}
        />
        {isFormSubmitted && selectedItems.length < 2 && (
          <span className="error-message">Minimum 2 Genre is required</span>
        )}
      </div>

      {/* Language */}
      <div className="uplod_genre_div">
    <label>Language* </label>
    <Select
        showSearch
        placeholder="Select your language"
        value={language}
        onChange={(value) => {
            setLanguage(value);
        }}
        style={{ width: "95%" }}
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
        {lang.map((lang, index) => (
            <Option key={index} value={lang?.id}>
                {lang?.name}
            </Option>
        ))}
    </Select>
    {isFormSubmitted && !language && (
        <span className="error-message">Language is required</span>
    )}
</div>


      <div className="uplod_genre_div">
        <label>Age Barrier*</label>
        {/* <div className="div_checkbox">
          <label htmlFor="option3" className="radio-label items-center">
            <input
              id="option3"
              type="radio"
              name="a"
              onChange={() => setAge("Below 13 years")}
            />{" "}
            <span>Below 13 years</span>{" "}
          </label>
        </div> */}
        <div className="div_checkbox">
          <label htmlFor="option2" className="radio-label items-center">
            <input
              id="option2"
              type="radio"
              name="a"
              onChange={() => setAge("Above 13 years")}
            />{" "}
            <span>Above 13 years</span>{" "}
          </label>
        </div>
        <div className="div_checkbox">
          <label htmlFor="option1" className="radio-label items-center">
            <input
              id="option1"
              type="radio"
              name="a"
              onChange={() => setAge("Above 18 years")}
            />{" "}
            <span>Above 18 years</span>
          </label>
        </div>
      </div>
      {isFormSubmitted && !age && (
        <span className="error-message">Age is required</span>
      )}

      <div className="uploadpopup_btm">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default UploadDetails;
