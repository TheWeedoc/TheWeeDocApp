import React, { useState } from "react";
import { Steps } from "antd";
import "./uploadShortFilm.css";
import UploadDetails from "./UploadDetails";
import UploadVideo from "./UploadVideo";
import Uploadcast from "./Uploadcast";

function UploadShortFlim({formData,setFormData}) {
  const [current, setCurrent] = useState(0);
  const [stepCompletion, setStepCompletion] = useState([false, false, false]);

  const [result, setResult] = useState({ id: "", name: "", success: false });

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Details",
      content: (
        <UploadDetails
          onNext={next}
          formData={formData}
          setFormData={setFormData}
        />
      ),
    },
    {
      title: "Images & video",
      content: (
        <UploadVideo
          onNext={next}
          current={current}
          onPrev={prev}
          formData={formData}
          setFormData={setFormData}
          setResult={setResult}
          resulted={result}
        />
      ),
    },
    {
      title: "Cast & Crew",
      content: (
        <Uploadcast
          onNext={next}
          current={current}
          onPrev={prev}
          formData={formData}
          setResult={setResult}
          resulted={result}
        />
      ),
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const handleStepCompletion = (index, isComplete) => {
    const updatedCompletion = [...stepCompletion];
    updatedCompletion[index] = isComplete;
    setStepCompletion(updatedCompletion);
  };

  const isNextDisabled = current > 0 && !stepCompletion[current - 1];

  return (
    <div className="uploadSec_popup">
      <Steps current={current} items={items} />
      <div>{steps[current].content}</div>
    </div>
  );
}

export default UploadShortFlim;
