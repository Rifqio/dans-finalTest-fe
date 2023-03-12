import {
    Text,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Center,
    Button,
    useToast,
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { createPengumuman, resetPengumuman } from '../../redux/slice/pengumumanSlice';
  
  function CreatePengumumanForm() {
    const [pengumuman, setPengumuman] = useState('');
    const dispatch = useDispatch();
    const toast = useToast();
    const { isSuccess, isLoading } = useSelector((state) => state.pengumuman);
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(createPengumuman(pengumuman));
    };
    useEffect(() => {
      if (isSuccess) {
        setTimeout(() => {
          dispatch(resetPengumuman());
        }, 3000);
        setPengumuman('')
      }
    }, [isSuccess]);
    return (
      <>
        <Center>
          <Text fontSize="3xl" fontWeight="bold">
            Broadcast New Pengumuman
          </Text>
        </Center>
        {/* {isSuccess &&
          toast({
            title: 'Pengumuman Created',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })} */}
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Pengumuman</FormLabel>
            <Input
              type="text"
              backgroundColor="white"
              onChange={(e) => setPengumuman(e.target.value)}
              value={pengumuman}
            />
          </FormControl>
          <Button type="submit" isLoading={isLoading}>
            Submit
          </Button>
        </form>
      </>
    );
  }
  
  export default CreatePengumumanForm;
  