import React from 'react';
import { Box, FormLabel, Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function ProfileComponent() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Box mb='5'>
        <FormLabel>Name</FormLabel>
        <Input
          type='text'
          color='green'
          fontWeight='bold'
          backgroundColor='white'
          value={user?.name}
          isDisabled={true}
        />
      </Box>
      <FormLabel>Email</FormLabel>
      <Input
        type='text'
        color='green'
        fontWeight='bold'
        backgroundColor='white'
        value={user?.email}
        isDisabled={true}
      />
    </div>
  );
}

export default ProfileComponent;
