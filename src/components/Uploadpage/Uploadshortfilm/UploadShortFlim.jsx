import React, { useState } from 'react';
import { Steps, theme } from 'antd';
import "./uploadShortFilm.css";
import UploadDetails from './UploadDetails';
import UploadVideo from './UploadVideo';
import Uploadcast from './Uploadcast';

function UploadShortFlim() {

  const [current, setCurrent] = useState(0);
  const [stepCompletion, setStepCompletion] = useState([false, false, false]);
  
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  
  const steps = [
    {
      title: 'Details',
      content: <UploadDetails onNext={next} />,
    },
    {
      title: 'Images & video',
      content: <UploadVideo onNext={next} current={current} onPrev={prev}/>,
    },
    {
      title: 'Cast & Crew',
      content: <Uploadcast onNext={next} current={current} onPrev={prev} />,
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
    <div className='uploadSec_popup'>
      <Steps current={current} items={items} />
      <div>{steps[current].content}</div>
      {/* <div style={{ marginTop: 24 }}>
        <div className='uploadpopup_btm'>
          {current > 0 && (
            <button onClick={prev}>
              Previous
            </button>
          )}

          {current === steps.length - 1 ? (
            <button disabled={isNextDisabled} onClick={next}>
              Done
            </button>
          ) : (
            <button disabled={isNextDisabled} onClick={next}>
              Next
            </button>
          )}
        </div>
      </div> */}
    </div>
  );
}

export default UploadShortFlim;
