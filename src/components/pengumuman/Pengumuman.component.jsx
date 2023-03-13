import { Box, Center, Flex, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function PengumumanComponent() {
  return (
    <Center>
      <Flex gap='10'>
        <LinkBox
          as="article"
          maxW="sm"
          p="5"
          borderWidth="1px"
          rounded="md"
          backgroundColor="white"
        >
          <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC"></Box>
          <Heading size="md" my="2">
            <LinkOverlay as={Link} to="/pengumuman/create">Broadcast New Pengumuman</LinkOverlay>
          </Heading>
        </LinkBox>
        <LinkBox
          as="article"
          maxW="sm"
          p="5"
          borderWidth="1px"
          rounded="md"
          backgroundColor="white"
        >
          <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC"></Box>
          <Heading size="md" my="2">
            <LinkOverlay as={Link} to="/pengumuman/create/excel">Broadcast Using File</LinkOverlay>
          </Heading>
        </LinkBox>
        <LinkBox
          as="article"
          maxW="sm"
          p="5"
          borderWidth="1px"
          rounded="md"
          backgroundColor="white"
        >
          <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC"></Box>
          <Heading size="md" my="2">
            <LinkOverlay as={Link} to="/pengumuman/all">Show All Pengumuman</LinkOverlay>
          </Heading>
        </LinkBox>
      </Flex>
    </Center>
  );
}

export default PengumumanComponent;
