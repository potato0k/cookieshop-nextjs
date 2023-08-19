'use client'

import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href='/'>
      <Flex gap="1">
        <Text fontWeight='bold' fontSize='lg' color='brand.primary'>
          Cookie
        </Text>
        <Text fontSize='lg' color='gray.800'>
          Shop
        </Text>
      </Flex>
    </Link>
  )
}
