import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPengumuman } from '../../redux/slice/pengumumanSlice';
import { formatDistance, formatDistanceToNow, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
function StatsCard({ title, stat, id }) {
  //   const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber as={Link} to={`pengumuman/${id}`} fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Pengumuman() {
  const { data } = useSelector((state) => state.pengumuman);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPengumuman());
    console.log(data);
  }, []);
  return (
    <Box maxW='7xl' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
        Recently Broadcasted Pengumuman
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {data &&
          Array.isArray(data) &&
          data
            .slice(0, 3)
            .map((data) => (
              <StatsCard
                key={data.id_pengumuman}
                id={data.id_pengumuman}
                title={formatDistanceToNow(parseISO(data.created_at), { addSuffix: true })}
                stat={data.title}
              />
            ))}
        {/* <StatsCard title={'In'} stat={'30 different countries'} />
        <StatsCard title={'Who speak'} stat={'100 different languages'} /> */}
      </SimpleGrid>
    </Box>
  );
}
