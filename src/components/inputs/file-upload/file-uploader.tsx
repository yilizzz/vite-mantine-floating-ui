import React, { useRef } from 'react';

import useFileUpload from 'react-use-file-upload';
import { FileUpload } from '@ark-ui/react';

const FileUploader = () => {
  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();

  const inputRef = useRef();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Display the files to be uploaded */}
      <div>
        <ul>
          {fileNames.map((name) => (
            <li key={name}>
              <span>{name}</span>

              <span onClick={() => removeFile(name)}>delete</span>
            </li>
          ))}
        </ul>

        {files.length > 0 && (
          <ul>
            <li>File types found: {fileTypes.join(', ')}</li>
            <li>Total Size: {totalSize}</li>
            <li>Total Bytes: {totalSizeInBytes}</li>

            <li className="clear-all">
              <button onClick={() => clearAllFiles()}>Clear All</button>
            </li>
          </ul>
        )}
      </div>

      {/* Provide a drop zone and an alternative button inside it to upload files. */}
      <div
        //   css={DropzoneCSS}
        style={{ border: '1px solid gray', height: '50vh' }}
        onDragEnter={handleDragDropEvent}
        onDragOver={handleDragDropEvent}
        onDrop={(e) => {
          handleDragDropEvent(e);
          setFiles(e, 'a');
        }}
      >
        <p>Drag and drop files here</p>

        <button onClick={() => inputRef.current.click()}>Or select files to upload</button>

        {/* Hide the crappy looking default HTML input */}
        <input
          ref={inputRef}
          type="file"
          multiple
          style={{ display: 'none' }}
          onChange={(e) => {
            setFiles(e, 'a');
            inputRef.current.value = null;
          }}
        />
      </div>
    </div>
  );
};
export default FileUploader;
