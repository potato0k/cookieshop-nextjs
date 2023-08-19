'use client'

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  FormLabel,
  Heading,
  Input,
  Stack
} from '@chakra-ui/react'
import { AppContext } from '@src/context/AppContext'
import React, { useContext } from 'react'

export const DeliveryInformation = () => {
  const {
    state: { checkout }
  } = useContext(AppContext)
  return (
    <Card borderWidth='1px' borderColor='gray.200' shadow='none'>
      <CardHeader>
        <Heading size='md'>Delivery Information</Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing='2rem'>
          <Box>
            <FormLabel fontWeight='bold'>Full Name</FormLabel>
            <Input type='text' placeholder='full name' />
          </Box>
          <Box>
            <FormLabel fontWeight='bold'>Address</FormLabel>
            <Input type='text' placeholder='address' />
          </Box>
          <Box>
            <FormLabel fontWeight='bold'>Phone</FormLabel>
            <Input type='text' placeholder='phone number' />
          </Box>
          <Box>
            <FormLabel fontWeight='bold'>Email</FormLabel>
            <Input type='email' placeholder='email' />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}
