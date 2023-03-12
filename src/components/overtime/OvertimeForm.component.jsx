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
import { createOvertime, resetOvertime } from '../../redux/slice/overtimeSlice';

function OvertimeForm() {
  const [keterangan, setKeterangan] = useState('');
  const dispatch = useDispatch();
  const toast = useToast();
  const { isSuccess, isLoading } = useSelector((state) => state.overtime);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createOvertime(keterangan));
  };
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(resetOvertime());
      }, 3000);
      setKeterangan('')
    }
  }, [isSuccess]);
  return (
    <>
      <Center>
        <Text fontSize="3xl" fontWeight="bold">
          Submit New Overtime Request Ticket
        </Text>
      </Center>
      {isSuccess &&
        toast({
          title: 'Overtime Request Created',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Keterangan</FormLabel>
          <Input
            type="text"
            backgroundColor="white"
            onChange={(e) => setKeterangan(e.target.value)}
            value={keterangan}
          />
        </FormControl>
        <Button type="submit" isLoading={isLoading}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default OvertimeForm;
