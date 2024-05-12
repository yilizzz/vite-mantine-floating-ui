import React, { useState, useRef } from 'react';

const FileUploader4 = ({ value, setValue }) => {
  // const [files, setFiles] = useState(value || []); // Initialize with provided value
  const fileInputRef = useRef(null);

  const handleFilesAdded = (event) => {
    const newFiles = Array.from(event.target.files);
    setValue(newFiles);
  };

  const handleFileDelete = (fileName) => {
    const updatedFiles = value.filter(file => file.name !== fileName);
    setValue(updatedFiles);
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
  };
  const getTotalFileSize = () => {
    const totalBytes = value.reduce((total, file) => total + file.size, 0);
    return formatBytes(totalBytes);
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFilesAdded}
        style={{ display: 'none' }}
      />
      <button type="button" onClick={() => fileInputRef.current.click()}>Select Files</button>

      <ul>
        {value && value.map((file, index) => (
          <li key={index}>
            {file.name} - {formatBytes(file.size)}
            <button onClick={() => handleFileDelete(file.name)}>Delete</button>
          </li>
        ))}
      </ul>
      {value && <p>Total size of all files: {getTotalFileSize()}</p>}
    </>
  );
};

export default FileUploader4;
