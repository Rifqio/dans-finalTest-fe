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
import { useNavigate } from 'react-router-dom';
import { deletePengumuman, getPengumuman } from '../../redux/slice/pengumumanSlice';
import { Link } from 'react-router-dom';
function ShowAllPengumuman() {
  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess } = useSelector((state) => state.pengumuman);
  useEffect(() => {
    dispatch(getPengumuman());
    console.log(data);
  }, []);

  const handleDelete = async (id) => {
    await dispatch(deletePengumuman(id));
    await dispatch(getPengumuman());
  };

  return (
    <div>
      <Text my='5' fontSize='2xl' fontWeight='bold'>
        List Pengumuman
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
              <Th>Title</Th>
              <Th>content</Th>
              <Th>Created At</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              Array.isArray(data) &&
              data.map((data, index) => (
                <Tr key={data.id_pengumuman}>
                  <Td>{index + 1}</Td>
                  <Td>{data.title}</Td>
                  <Td>{data.content}</Td>
                  <Td>{format(new Date(data.created_at), 'EEEE, dd MMMM yyyy')}</Td>
                  <Td>
                    <Button
                      as={Link}
                      to={`/pengumuman/${data.id_pengumuman}`}
                      isLoading={isLoading}
                      colorScheme='teal'
                      mr='5'
                    >
                      Details
                    </Button>
                    <Button
                      onClick={() => handleDelete(data.id_pengumuman)}
                      isLoading={isLoading}
                      colorScheme='red'
                    >
                      Delete
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

export default ShowAllPengumuman;
