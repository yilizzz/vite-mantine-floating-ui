import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import useFileUpload from 'react-use-file-upload';

const FileUploader = forwardRef((props, ref) => {
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
  // Use useImperativeHandle to expose specific values to the parent component's ref
  useImperativeHandle(ref, () => ({
    getFilesData() {
      return files; // This method can be called by the parent to get the child's data
    },
  }));
  const inputRef = useRef();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Display the files to be uploaded */}
      <div>
        <ul>
          {fileNames.map((name) => {
            // Find the file object corresponding to the current file name
            const file = files.find((file) => file.name === name);

            // Determine how to display the file based on its type
            let fileDisplay;

            if (file) {
              const fileURL = URL.createObjectURL(file);

              if (file.type.startsWith('image/')) {
                // Display an image file directly using an <img> tag
                fileDisplay = (
                  <img
                    src={fileURL}
                    alt={file.name}
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />
                );
              } else if (file.type === 'application/pdf') {
                // Provide a link to view/download a PDF
                fileDisplay = (
                  <a href={fileURL} target="_blank" rel="noopener noreferrer">
                    View PDF
                  </a>
                );
              } else if (
                /application\/(msword|vnd\.openxmlformats-officedocument\.wordprocessingml\.document)/.test(
                  file.type
                )
              ) {
                // Provide a link to download a Word document
                fileDisplay = (
                  <a href={fileURL} download={file.name}>
                    Download Word Document
                  </a>
                );
              } else {
                // General fallback for other file types
                fileDisplay = (
                  <a href={fileURL} download={file.name}>
                    Download File
                  </a>
                );
              }
            }

            return (
              <li key={name}>
                <span>{name}</span>
                <span>{fileDisplay}</span>
                <span
                  onClick={() => {
                    removeFile(name);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  delete
                </span>
              </li>
            );
          })}
        </ul>

        {files.length > 0 && (
          <ul>
            <li>File types found: {fileTypes.join(', ')}</li>
            <li>Total Size: {totalSize}</li>
            <li>Total Bytes: {totalSizeInBytes}</li>

            <li className="clear-all">
              <button
                onClick={() => {
                  clearAllFiles();
                }}
              >
                Clear All
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Provide a drop zone and an alternative button inside it to upload files. */}
      <div
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
});
export default FileUploader;
