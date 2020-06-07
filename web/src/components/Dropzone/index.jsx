import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css'

interface Props {
  onFileUpload: (file: File) => void;
}

const Dropzone: React.FC<Props> = () => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');
  
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*'})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*"/>
      { selectedFileUrl
        ? <img src={selectedFileUrl} alt="Point thumbnail"/>
        : (<p>
            <FiUpload />
            Coloque a imagem do estabelecimento aqui.
          </p>
        )
      }
    </div>
  )
}

/*{
    isDragActive ?
      <p>Drop the files here ...</p> :
      <p>Drag 'n' drop some files here, or click to select files</p>
}*/

export default Dropzone;