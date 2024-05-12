import { useEffect, useRef } from 'react';
import useFileUpload from 'react-use-file-upload';
import { X } from 'lucide-react';
import {
  StFileUploaderRoot,
  StFileUploaderInfo,
  StFileUploaderOperation,
  StFileUploaderList,
  StFileUploaderItem,
  StFileUploaderDetails,
  StFileUploaderInfoText,
} from './file-uploader.styled';
import Button from '@/components/buttons/button/Button';

const FileUploader2 = ({ value, setValue, uploadDone, resetUploadDone }) => {
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

  useEffect(() => {
    if (uploadDone) {
      clearAllFiles();
      resetUploadDone();
    }
  }, [uploadDone]);
  const inputRef = useRef();
  const handleChange = () => {
    const updatedFiles = Array.from(files);
    console.log(files);
    setValue(prevFiles => [...prevFiles, ...updatedFiles]);
  };
  return (
    <StFileUploaderRoot>
      {files.length > 0 ? (
        <StFileUploaderInfo>
          <StFileUploaderList>
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
                // URL.revokeObjectURL(fileURL);
              }

              return (
                <StFileUploaderItem key={name}>
                  <span
                    onClick={() => {
                      removeFile(name);
                      handleChange();
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <X />
                  </span>
                  <span style={{ fontWeight: 'bold' }}>{name}</span>

                  <span>{fileDisplay}</span>
                </StFileUploaderItem>
              );
            })}
          </StFileUploaderList>

          {files.length > 0 && (
            <StFileUploaderDetails>
              <li>File types found: {fileTypes.join(', ')}</li>
              <li>Total Size: {totalSize}</li>
              <li>Total Bytes: {totalSizeInBytes}</li>

              <li className="clear-all">
                <Button
                  variant="secondary"
                  onClick={() => {
                    clearAllFiles();
                    handleChange();
                  }}
                >
                  Clear All
                </Button>
              </li>
            </StFileUploaderDetails>
          )}
        </StFileUploaderInfo>
      ) : (
        <StFileUploaderInfoText>Files will be showed here</StFileUploaderInfoText>
      )}

      {/* Provide a drop zone and an alternative button inside it to upload files. */}
      <StFileUploaderOperation
        onDragEnter={handleDragDropEvent}
        onDragOver={handleDragDropEvent}
        onDrop={(e) => {
          handleDragDropEvent(e);
          setFiles(e, 'a');
          handleChange();
        }}
      >
        <p>Drag and drop files here</p>

        <Button type="button" onClick={() => inputRef.current.click()}>
          Or select files to upload
        </Button>

        {/* Hide the crappy looking default HTML input */}
        <input
          ref={inputRef}
          type="file"
          multiple
          style={{ display: 'none' }}
          onChange={(e) => {
            setFiles(e, 'a');
            handleChange();
            inputRef.current.value = null;
          }}
        />
      </StFileUploaderOperation>
    </StFileUploaderRoot>
  );
};

export default FileUploader2;
