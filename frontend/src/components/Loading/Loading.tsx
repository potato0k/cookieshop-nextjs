'use client'
import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export const Loading = () => {
  return (
    <Flex
      minH='calc(100vh - 300px)'
      justify='center'
      align='center'
      flexDir='column'
    >
      <Image
        src='/cat_.gif'
        alt='loading cart'
        width={200}
        height={200}
      />
      <Text fontWeight='semibold'>Loading...</Text>
    </Flex>
  )
}
