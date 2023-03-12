import { Center, Flex } from '@chakra-ui/react';
import CardComponent from '../../components/card/Card.component';
import Sidebar from '../../components/sidebar/Sidebar.component';
import CheckinComponent from '../../components/card/Checkin.component';
import CheckoutComponent from '../../components/card/Checkout.component';
import React from 'react';

function AbsensiPage() {
  return (
    <>
      <Sidebar
        children={
          <Center>
            <Flex alignItems="center" gap='20'>
              <CheckinComponent />
              <CheckoutComponent/>
            </Flex>
          </Center>
        }
      />
    </>
  );
}

export default AbsensiPage;
