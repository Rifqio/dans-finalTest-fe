import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Text,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  approveOvertime,
  getOvertime,
  rejectOvertime,
  resetOvertime,
} from '../../redux/slice/overtimeSlice';
function ShowAllOvertime() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, isError, isSuccess } = useSelector((state) => state.overtime);
  useEffect(() => {
    dispatch(getOvertime());
    console.log(data);
  }, []);

  const handleClick = async (id) => {
    await dispatch(approveOvertime(id));
    await dispatch(getOvertime());
  };

  const handleReject = async (id) => {
    await dispatch(rejectOvertime(id));
    await dispatch(getOvertime());
  };
  return (
    <div>
      <Text my='5' fontSize='2xl' fontWeight='bold'>
        List Of All Overtime Request
      </Text>
      {isLoading && (
        <Text fontSize='xl' fontWeight='light'>
          Loading data...
        </Text>
      )}
      {isError && (
        <Text fontSize='xl' fontWeight='light'>
          {isError.message}
        </Text>
      )}
      <TableContainer backgroundColor='white' rounded='md'>
        <Table variant='simple' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Requester</Th>
              <Th>keterangan</Th>
              <Th>status</Th>
              <Th>Issued At</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              Array.isArray(data) &&
              data
                .filter((item) => item.type === 'Pending')
                .map((data, index) => (
                  <Tr key={data.id_req_overtime}>
                    <Td>{index + 1}</Td>
                    <Td>{data.name}</Td>
                    <Td>{data.keterangan}</Td>
                    <Td>{data.type}</Td>
                    <Td>{format(new Date(data.created_at), 'EEEE, dd MMMM yyyy')}</Td>
                    <Td>
                      <Button
                        isLoading={isLoading}
                        onClick={() => handleClick(data.id_req_overtime)}
                        colorScheme='teal'
                        mr='5'
                      >
                        Approve
                      </Button>
                      <Button
                        isLoading={isLoading}
                        onClick={() => handleReject(data.id_req_overtime)}
                        colorScheme='red'
                      >
                        Reject
                      </Button>
                    </Td>
                  </Tr>
                ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ShowAllOvertime;
