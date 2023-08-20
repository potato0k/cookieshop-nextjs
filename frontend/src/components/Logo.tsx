'use client'

import { Flex, Text, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
 onclick?: () => void 
}
export const Logo = ({onclick}: LogoProps) => {
  return (
    <Link href='/' onClick={onclick}>
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
