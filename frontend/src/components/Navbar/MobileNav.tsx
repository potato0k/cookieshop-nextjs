'use client'

import { Box, Flex, Stack } from '@chakra-ui/react'
import { Logo } from '../Logo'
import { Cart } from '../Cart/Cart'
import { Wishlist } from '../Wishlist/Wishlist'
import { Search } from '../Search/Search'
import { MobileNavMenu } from './MobileNavMenu'

export function MobileNav () {
  return (
    <>
      <Flex
        justify='space-between'
        alignItems='center'
        display={{ base: 'flex', lg: 'none' }}
        px={{ base:'1rem', lg:'2rem' }}
        py='1rem'
        borderBottom='1px'
        borderColor='gray.200'
      >
        <MobileNavMenu />

        <Flex justify='flex-end'>
          <Wishlist />
          <Cart />
        </Flex>
      </Flex>
      <Box
        px='2rem'
        py='1rem'
        display={{ base: 'block', lg: 'none' }}
      >
        <Search />
      </Box>
    </>
  )
}
