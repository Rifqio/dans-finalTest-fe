import { Box, Center, Flex, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ReimbursmentMenuComponent() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Center>
      <Flex gap='10'>
        <LinkBox
          as='article'
          maxW='sm'
          p='5'
          borderWidth='1px'
          rounded='md'
          backgroundColor='white'
        >
          <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'></Box>
          <Heading size='md' my='2'>
            <LinkOverlay as={Link} to='/reimbursment/create'>
              Request New Reimbursment
            </LinkOverlay>
          </Heading>
        </LinkBox>
        <LinkBox
          as='article'
          maxW='sm'
          p='5'
          borderWidth='1px'
          rounded='md'
          backgroundColor='white'
        >
          <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'></Box>
          <Heading size='md' my='2'>
            <LinkOverlay as={Link} to='/reimbursment/myhistory'>
              My Reimbursment History
            </LinkOverlay>
          </Heading>
        </LinkBox>
        {user?.role_id === 2 && (
          <LinkBox
            as='article'
            maxW='sm'
            p='5'
            borderWidth='1px'
            rounded='md'
            backgroundColor='white'
          >
            <Box as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'></Box>
            <Heading size='md' my='2'>
              <LinkOverlay as={Link} to='/reimbursment/all'>
                Show All Reimbursment
              </LinkOverlay>
            </Heading>
          </LinkBox>
        )}
      </Flex>
    </Center>
  );
}

export default ReimbursmentMenuComponent;
