import { useEffect, useRef, useState } from 'react';
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

// 较好版本
// 如果不需要上传完毕清空files的功能，可以直接传files出去用于提交
// 需要清除files的话,因为hook的setFiles只接受e而无法接受value作为参数，想使用的totalSize等又需要内部files，只能每次更新文件时，同时setValue和setFiles

const FileUploader2 = ({ value, setValue, multiple }) => {
  const {
    files,
    setFiles,
    clearAllFiles,
    removeFile,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
  } = useFileUpload();
  // useEffect(() => {
  //   setValue(files);
  // }, [files, setValue]);
  const inputRef = useRef();
  const handleFileDelete = (fileName) => {
    const updatedFiles = value.filter((file) => file.name !== fileName);
    setValue(updatedFiles);
  };
  return (
    <StFileUploaderRoot>
      {value.length > 0 ? (
        <StFileUploaderInfo>
          <StFileUploaderList>
            {value.map((file, index) => {
              let fileDisplay;

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

              return (
                <StFileUploaderItem key={index}>
                  <span
                    onClick={() => {
                      removeFile(file.name);
                      handleFileDelete(file.name);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <X />
                  </span>
                  <span style={{ fontWeight: 'bold' }}>{file.name}</span>

                  <span>{fileDisplay}</span>
                </StFileUploaderItem>
              );
            })}
          </StFileUploaderList>

          {value.length > 0 && (
            <StFileUploaderDetails>
              <li>File types found: {fileTypes.join(', ')}</li>
              <li>Total Size: {totalSize}</li>
              <li>Total Bytes: {totalSizeInBytes}</li>

              <li className="clear-all">
                <Button
                  variant="secondary"
                  onClick={() => {
                    clearAllFiles();
                    setValue([]);
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
          let newFiles;
          if (e.currentTarget?.files) {
            newFiles = Array.from(e.currentTarget.files);
          } else if (e?.dataTransfer.files) {
            newFiles = Array.from(e.dataTransfer.files);
          } else {
            console.error('Argument not recognized. Are you sure you are passing an event object?');
          }
          setValue(newFiles);
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
          multiple={multiple}
          style={{ display: 'none' }}
          onChange={(e) => {
            setFiles(e, 'a');
            const newFiles = Array.from(e.target.files);
            setValue(newFiles);
            inputRef.current.value = null;
          }}
        />
      </StFileUploaderOperation>
    </StFileUploaderRoot>
  );
};

export default FileUploader2;
