import React, { useState, useRef } from 'react';

const FileUploader3 = ({ onFilesChange }) => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFilesAdded = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    if (onFilesChange) {
      onFilesChange([...files, ...newFiles]);
    }
    event.target.value = null; // Reset the file input
  };

  const handleFileDelete = (fileName) => {
    const updatedFiles = files.filter(file => file.name !== fileName);
    setFiles(updatedFiles);
    if (onFilesChange) {
      onFilesChange(updatedFiles);
    }
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
    const totalBytes = files.reduce((total, file) => total + file.size, 0);
    return formatBytes(totalBytes);
  };
  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFilesAdded}
        style={{ display: 'none' }}
      />
      <button type="button" onClick={() => fileInputRef.current.click()}>Select Files</button>

      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name} - {formatBytes(file.size)}
            <button onClick={() => handleFileDelete(file.name)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total size of all files: {getTotalFileSize()}</p>
    </div>
  );
};

export default FileUploader3;
