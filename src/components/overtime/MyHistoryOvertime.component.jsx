import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOvertimeHistory } from '../../redux/slice/overtimeSlice';
function MyHistoryOvertime() {
  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess } = useSelector((state) => state.overtime);
  useEffect(() => {
    dispatch(getOvertimeHistory());
    console.log(data);
  }, []);

  return (
    <div>
      <Text my='5' fontSize='2xl' fontWeight='bold'>
        Overtime Request History
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
              <Th>keterangan</Th>
              <Th>Issued At</Th>
              <Th>Updated at</Th>
              <Th>status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              Array.isArray(data) &&
              data.map((data, index) => (
                <Tr key={data.id_req_overtime}>
                  <Td>{index + 1}</Td>
                  <Td>{data.keterangan}</Td>
                  <Td>{format(new Date(data.created_at), 'EEEE, dd MMMM yyyy')}</Td>
                  <Td>{format(new Date(data.updated_at), 'EEEE, dd MMMM yyyy')}</Td>
                  <Td>{data.type}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyHistoryOvertime;
