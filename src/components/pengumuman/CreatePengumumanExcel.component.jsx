import { Text, FormControl, FormLabel, Input, Center, Button, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createPengumuman,
  createPengumumanBulk,
  resetPengumuman,
} from '../../redux/slice/pengumumanSlice';
import * as xlsx from 'xlsx';

function CreatePengumumanExcel() {
  const dispatch = useDispatch();
  const [excel, setExcel] = useState();
  const { isSuccess, isLoading, isError } = useSelector((state) => state.pengumuman);
  useEffect(() => {
    console.log(excel);
  }, [excel]);

  const readXLSX = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = xlsx.read(data, { type: 'array' });
      const sheetname = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetname];
      const jsonData = xlsx.utils.sheet_to_json(worksheet);
      setExcel(jsonData);
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(excel);
    dispatch(createPengumumanBulk(excel));
  };
  return (
    <>
      <Center>
        <Text fontSize='3xl' fontWeight='bold'>
          Broadcast New Pengumuman
        </Text>
      </Center>
      {isSuccess && <Text>File Uploaded Successfully</Text>}
      {isError && <Text>{isError.message.toString()}</Text>}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Pengumuman</FormLabel>
          <Input type='file' name='upload' onChange={readXLSX} />
        </FormControl>
        <Button type='submit' isLoading={isLoading}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default CreatePengumumanExcel;
