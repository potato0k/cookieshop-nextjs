import { Box } from '@chakra-ui/react'
import React from 'react'
import { navbarStyles } from '@/components/Navbar/style'
import { DesktopNav } from '@/components/Navbar/DesktopNav'
import { MobileNav } from './MobileNav'
import { useSession } from 'next-auth/react'

export const Navbar = () => {
  const { data, status } = useSession()

  return (
    <Box h={{ base: '140px', lg: '120px' }}>
      <Box {...navbarStyles}>
        <MobileNav data={data!} />
        <DesktopNav data={data!} />
      </Box>
    </Box>
  )
}
