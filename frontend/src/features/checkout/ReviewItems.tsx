'use client'

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import { AppContext } from '@src/context/AppContext'
import { formatPrice, getSubstring } from '@src/helpers'
import Link from 'next/link'
import React, { useContext } from 'react'

export const ReviewItems = () => {
  const {
    state: { checkout }
  } = useContext(AppContext)
  return (
    <Card borderWidth='1px' borderColor='gray.200' shadow='none'>
      <CardHeader>
        <Heading size='md'>Review Items</Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          {checkout.map(item => (
            <Flex key={item.id} align='center' justify='space-between' mb={2.5}>
              <Flex align='center'>
                <Link href={`/products/${item.slug}`}>
                  <Image
                    src={item.mainImage}
                    objectFit='cover'
                    rounded='lg'
                    boxSize='100px'
                    alt={item.name}
                    _hover={{ cursor: 'pointer' }}
                  />
                </Link>
                <Box mx='1rem'>
                  <Link href={`/products/${item.slug}`}>
                    <Text
                      fontWeight='bold'
                      fontSize={{ base: 'sm', lg: 'lg' }}
                      maxW='500px'
                      _hover={{ cursor: 'pointer' }}
                    >
                      {getSubstring(item.name, 20)}
                    </Text>
                    <Text color='gray.500'>
                      {getSubstring(item.description, 20)}
                    </Text>
                  </Link>
                </Box>
              </Flex>

              <Box textAlign='right'>
                <Text fontWeight='bold' fontSize={{ base: 'md', lg: 'lg' }}>
                  ${formatPrice(item.price)}
                </Text>
                <Text fontSize={{ base: 'sm', lg: 'md' }}>
                  Quantity: {item.count}
                </Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      </CardBody>
    </Card>
  )
}
