import React, { useState } from "react";
import { Delete, PaperClip } from "../../../Assests/Svg/Commonsvg";
import UploadIcon from "../../../Assests/Images/UploadIcon.png";

export const DragZone = ({
  onFileChange,
  name,
  inst1,
  inst2,
  inst3,
  accept,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileList = Array.from(files);
    setSelectedFiles(fileList);
    onFileChange(fileList, name);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemove = (file) => {
    const updatedList = selectedFiles.filter((f) => f !== file);
    setSelectedFiles(updatedList);
    onFileChange(updatedList);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const fileList = Array.from(files);
    setSelectedFiles(fileList);
    onFileChange(fileList);
  };

  return (
    <div className="w-full" onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="border-2 border-gray-300 bg-transparent border-dashed rounded-md py-2 md:py-6 ">
        <label className="cursor-pointer">
          <input
            type="file"
            className="hidden"
            accept={accept}
            name={name}
            onChange={handleFileChange}
          />
          <div className="flex flex-col justify-center items-center py-4">
            <img src={UploadIcon} alt="upload" className="w-20" />

            <div className=" flex flex-col justify-center items-center text-left py-4">
              <p className="ant-upload-text">
                Drag and drop {name} files to upload
              </p>
              <div className=" px-2 py-1 bg-white text-black font-semibold rounded-md my-4">
                Select Files
              </div>
              <ul className="image_upload_instr">
                <li>{inst1}</li>
                <li>{inst2}</li>
                <li>{inst3}</li>
              </ul>
            </div>
          </div>
        </label>
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-4 bg-transparent">
          <ul className="list-inside">
            {selectedFiles.map((file, index) => (
              <div
                className="flex flex-row items-center justify-center justify-between border-none mb-2 text-white p-3"
                key={index}
              >
                <h1 className="text-xl">{PaperClip}</h1>

                <li className="">{file.name}</li>

                <h1
                  className="text-lg text-red-600 font-extrabold"
                  onClick={() => handleRemove(file)}
                >
                  {Delete}
                </h1>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
