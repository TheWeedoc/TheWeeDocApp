import React from 'react'
import "./Uploadpage.css"
import Header from '../../components/Layout/Header/Header'
import { Tabs } from 'antd';

function Uploadpage() {

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: `Verification`,
      children: `Content of Tab Verification`,
    },
    {
      key: '2',
      label: `Rejected`,
      children: `Content of Tab Rejected`,
    },
    {
      key: '3',
      label: `Approved`,
      children: `Content of Tab Approved`,
    },
  ];

  return (
    <>
    <Header/>
    <div className='uploadMainDiv'>
        <h2>Uploads & status</h2>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
    </div>
    </>
  )
}

export default Uploadpage