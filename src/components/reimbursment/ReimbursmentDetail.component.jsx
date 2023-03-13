import React, { useEffect } from 'react';
import { FormLabel, Input, Image, Button, Box, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  approveReimbursment,
  getReimbursment,
  getReimbursmentById,
  rejectReimbursment,
} from '../../redux/slice/reimbursmentSlice';
import { format } from 'date-fns';
function ReimbursmentDetailComponent() {
  const { data, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.reimbursment,
  );
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = async () => {
    await dispatch(getReimbursmentById(id));
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleApprove = async (id) => {
    await dispatch(approveReimbursment(id));
    window.location.href = '/reimbursment/all';
  };

  const handleReject = async (id) => {
    await dispatch(rejectReimbursment(id));
    window.location.href = '/reimbursment/all';
  };

  return (
    <div>
      {message && <h1>{message}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error fetching data</h1>}
      {data && (
        <form>
          <Link to='/reimbursment/all'> Back </Link>
          <Flex justifyContent={'right'}>
            <Button
              isLoading={isLoading}
              onClick={() => handleApprove(data[0].id_req_reimbursment)}
              colorScheme='teal'
            >
              Accept
            </Button>
            <Button
              isLoading={isLoading}
              onClick={() => handleReject(data[0].id_req_reimbursment)}
              colorScheme='red'
              ml={'5'}
            >
              Reject
            </Button>
          </Flex>
          <FormLabel>Requester</FormLabel>
          <Input backgroundColor={'white'} isDisabled={true} value={data[0].name} />
          <FormLabel my={'5'}>Keterangan</FormLabel>
          <Input backgroundColor={'white'} isDisabled={true} value={data[0].keterangan} />
          <FormLabel my={'5'}>Issued At</FormLabel>
          <Input
            backgroundColor={'white'}
            isDisabled={true}
            value={format(new Date(data[0].created_at), 'EEEE, dd MMMM yyyy')}
          />
          <FormLabel my={'5'}>Bukti</FormLabel>
          <Image src={data[0].bukti ? data[0].bukti : 'https://fakeimg.pl/350x200/'} />
        </form>
      )}
    </div>
  );
}

export default ReimbursmentDetailComponent;
