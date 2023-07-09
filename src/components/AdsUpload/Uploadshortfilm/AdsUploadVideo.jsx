import React from 'react'
import "./AdsuploadShortFilm.css"
import { message, Upload } from 'antd';
import UploadIcon from "../../../Assests/Images/UploadIcon.png"
function AdsUploadVideo() {

  const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};


  return (
    <div className='upload_popup_inside'>
        <b>Images & Videos</b>

        <div className='upld_img'>
        <span className='upload_img_txt'>Thumbnail Image*</span>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <img src={UploadIcon} alt='upload' />
          </p>
          <p className="ant-upload-text">Drag and drop image files to upload</p>
          <ul className='image_upload_instr'>
            <li>Image should be in HD quality.</li>
            <li>Image Dimension : 210*275</li>
            <li>Please be sure not to violate other’s copyright or privacy rights.</li>
          </ul>
      </Dragger>  
      </div>
      <div className='upld_img'>
        <span className='upload_img_txt'>Video*</span>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <img src={UploadIcon} alt='upload' />
          </p>
          <p className="ant-upload-text">Drag and drop Video files to upload</p>
          {/* <ul className='image_upload_instr'>
            <li>Image should be in HD quality.</li>
            <li>Image Dimension : 210*275</li>
            <li>Please be sure not to violate other’s copyright or privacy rights.</li>
          </ul> */}
      </Dragger>  
      </div>
    </div>
  )  
}

export default AdsUploadVideo