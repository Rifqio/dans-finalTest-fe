import { Box, Center, Text, Stack, Button, useColorModeValue, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { createCheckin, resetAbsenState } from '../../redux/slice/absensiSlice';
import React, { useEffect } from 'react';

export default function CheckinComponent() {
  const dispatch = useDispatch();
  const handleCheckin = async (e) => {
    e.preventDefault();
    dispatch(createCheckin());
  };
  const toast = useToast();
  const id = 'test-toast';
  const { data, isLoading, isError, isSuccess } = useSelector((state) => state.absensi);
  useEffect(() => {
    dispatch(resetAbsenState());
    console.log(data);
    console.log(isError);
  }, []);
  const currentTime = new Date().getHours();
  const disabledTime = currentTime >= 10 ? true : false;
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        {isError && !toast.isActive(id)
          ? toast({
              title: 'Error.',
              description: isError.message,
              status: 'error',
              duration: 200,
              isClosable: true,
            })
          : null}
        {isSuccess && !toast.isActive(id)
          ? toast({
              title: 'Checkin Successful.',
              status: 'success',
              duration: 1000,
              isClosable: true,
            })
          : null}
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'6xl'} fontWeight={800}>
              Checkin
            </Text>
          </Stack>
        </Stack>
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={6}>
            <form onSubmit={handleCheckin}>
              <Button
                isLoading={isLoading}
                type='submit'
                mt={10}
                w={'full'}
                bg={'green.400'}
                color={'white'}
                isDisabled={disabledTime}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: 'green.500',
                }}
                _focus={{
                  bg: 'green.500',
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
      </Box>
    </Center>
  );
}
