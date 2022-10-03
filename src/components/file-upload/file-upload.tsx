import {
  Input,
  FormControl,
  Button,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { FiFile } from 'react-icons/fi';
import React, { useRef } from 'react';

export const FileUpload: React.FC<any> = ({
  name,
  children,
  onImageUpload,
}) => {
  const inputRef = useRef<any>();

  const handleImageUpload = (e: any) => {
    console.log(e.target.files);
    if(e.target.files?.length) {
        const url = URL.createObjectURL(e.target.files[0]);
        onImageUpload(url)
    }
  }

  return (
    <FormControl isRequired>
      <FormLabel htmlFor='writeUpFile'>{children}</FormLabel>
      <input
        type='file'
        //   accept={''}
        name={name}
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      ></input>
      <Button onClick={() => inputRef?.current.click()}>
      <Icon as={FiFile} />
      
      Upload Event Image{' '}
      </Button>
    </FormControl>
  );
};

export default FileUpload;
