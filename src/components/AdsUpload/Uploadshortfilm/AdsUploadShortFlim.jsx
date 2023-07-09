import React from 'react'
import {Steps, theme } from 'antd';
import { useState } from 'react';
import "./AdsuploadShortFilm.css"
import AdsUploadDetails from './AdsUploadDetails';
import AdsUploadVideo from './AdsUploadVideo';
import AdsUploadcast from './AdsUploadcast';
function AdsUploadShortFlim() {
    const steps = [
        {
          title: 'Details',
          content: <AdsUploadDetails/>,
        },
        {
          title: 'Images & video',
          content: <AdsUploadVideo/>,
        },
        {
          title: 'Budget Fixing',
          content: <AdsUploadcast/>,
        },
      ];
  
      const [current, setCurrent] = useState(0);
      const next = () => {
        setCurrent(current + 1);
      };
      const prev = () => {
        setCurrent(current - 1);
      };
      const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
      }));
  
      return (
        <div className='uploadSec_popup'>
          <Steps current={current} items={items} />
          <div>{steps[current].content}</div>
          <div
            style={{
              marginTop: 24,
            }}
          >
            
          <div className='uploadpopup_btm'>
            {current > 0 && (
              <button
                onClick={() => prev()}
              >
                Previous
              </button>
            )}

        {current === steps.length - 1 && (
          <button >
            Done
          </button>
        )}

            {current < steps.length - 1 && (
              <button  onClick={() => next()}>
                Next
              </button>
            )}
          </div>

          </div>
        </div>
      );
    };

export default AdsUploadShortFlim