import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReimbursment } from '../../redux/slice/reimbursmentSlice';
function ShowAllReimbursment() {
  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess } = useSelector((state) => state.reimbursment);
  useEffect(() => {
    dispatch(getReimbursment());
    console.log(data);
  }, []);

  return (
    <div>
      <Text my='5' fontSize='2xl' fontWeight='bold'>
        List Reimbursment
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
              <Th>Created At</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              Array.isArray(data) &&
              data
                .filter((item) => item.type === 'Pending')
                .map((data, index) => (
                  <Tr key={data.id_req_reimbursment}>
                    <Td>{index + 1}</Td>
                    <Td>{data.name}</Td>
                    <Td>{data.keterangan}</Td>
                    <Td>{format(new Date(data.created_at), 'EEEE, dd MMMM yyyy')}</Td>
                    <Td>{data.type}</Td>
                    <Td>
                      <Button
                        as={Link}
                        to={`/reimbursment/${data.id_req_reimbursment}`}
                        isLoading={isLoading}
                        colorScheme='teal'
                        mr='5'
                      >
                        Details
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

export default ShowAllReimbursment;
