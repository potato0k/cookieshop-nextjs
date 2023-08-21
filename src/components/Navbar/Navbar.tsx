   

import { Box } from '@chakra-ui/react'
import React from 'react'
import { navbarStyles } from '@/components/Navbar/style'
import { DesktopNav } from '@/components/Navbar/DesktopNav'
import { MobileNav } from './MobileNav'

export const Navbar = () => {
  return (
    <Box h={{ base:'140px', lg:'120px' }}>
      <Box {...navbarStyles}>
        <MobileNav />
        <DesktopNav />
      </Box>
    </Box>
  )
}
