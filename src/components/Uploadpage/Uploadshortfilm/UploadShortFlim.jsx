import React from 'react'
import {Steps, theme } from 'antd';
import { useState } from 'react';
import "./uploadShortFilm.css"
import UploadDetails from './UploadDetails';
import UploadVideo from './UploadVideo';
import Uploadcast from './Uploadcast';
function UploadShortFlim() {
    const steps = [
        {
          title: 'Details',
          content: <UploadDetails/>,
        },
        {
          title: 'Images & video',
          content: <UploadVideo/>,
        },
        {
          title: 'Cast & Crew',
          content: <Uploadcast/>,
        },
      ];
      const { token } = theme.useToken();
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
      const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
      };
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

export default UploadShortFlim