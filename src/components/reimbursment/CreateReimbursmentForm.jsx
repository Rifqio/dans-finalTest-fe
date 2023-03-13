import {
  Text,
  FormControl,
  FormLabel,
  Input,
  Center,
  Button,
  useToast,
  Box,
  Image,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReimbursment } from '../../redux/slice/reimbursmentSlice';
import { useNavigate } from 'react-router-dom';
function CreateReimbursmentForm() {
  const [keterangan, setKeterangan] = useState('');
  const [thumbnailBukti, setThumbnailBukti] = useState('https://fakeimg.pl/350x200/');
  const [saveBukti, setSaveBukti] = useState();
  const dispatch = useDispatch();
  const toast = useToast();
  const { isSuccess, isLoading } = useSelector((state) => state.reimbursment);
  const navigate = useNavigate();
  //   const payload = { keterangan, bukti };
  // useEffect(() => {
  //   if (isSuccess) {
  //     setTimeout(() => {
  //       dispatch(resetPengumuman());
  //     }, 3000);
  //     setPengumuman('')
  //   }
  // }, [isSuccess]);
  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    setThumbnailBukti(URL.createObjectURL(uploaded));
    setSaveBukti(uploaded);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bukti = new FormData();
    bukti.append('bukti', saveBukti);
    dispatch(createReimbursment({ bukti, keterangan }));
    navigate('/reimbursment/myhistory')
  };
  return (
    <>
      <Center>
        <Text fontSize='3xl' fontWeight='bold'>
          Create New Reimbursment Request
        </Text>
      </Center>
      {isSuccess &&
        toast({
          title: 'Reimbursment Created',
          status: 'success',
          duration: 500,
          isClosable: true,
        })}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Keterangan</FormLabel>
          <Input
            type='text'
            backgroundColor='white'
            onChange={(e) => setKeterangan(e.target.value)}
            value={keterangan}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Bukti</FormLabel>
          <Box mb='4'>
            <Image src={thumbnailBukti} />
          </Box>
          <Input type='file' name='bukti' accept='image/*' onChange={handleUploadChange} />
        </FormControl>
        <Button type='submit' isLoading={isLoading}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default CreateReimbursmentForm;
