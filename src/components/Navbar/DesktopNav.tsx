import { SignInButton } from '@/components/Buttons'
import { navItems } from '@/helpers'
import { Box, Flex, Stack } from '@chakra-ui/react'
import { Session } from 'next-auth'
import Link from 'next/link'
import { Cart } from '../Cart/Cart'
import { Logo } from '../Logo'
import { ProfileButton } from '../ProfileButton'
import { Search } from '../Search/Search'
import { Wishlist } from '../Wishlist/Wishlist'

interface DesktopNavProps {
  data: Session
}

export function DesktopNav ({ data }: DesktopNavProps) {
  return (
    <Flex
      justify='space-between'
      alignItems='center'
      display={{ base: 'none', lg: 'flex' }}
      px='2rem'
      py='1rem'
      borderBottom='1px'
      borderColor='gray.200'
    >
      <Stack direction='row' gap={6} flex={1} alignItems='center'>
        <Box mr='1rem'>
          <Logo />
        </Box>

        {navItems.map(navItem => (
          <Box key={navItem.label}>
            <Link href={navItem.href}>{navItem.label}</Link>
          </Box>
        ))}

        <Search />
      </Stack>

      <Stack direction='row' spacing={3}>
        <Wishlist />
        <Cart />
        {!data ? (
          <>
            <SignInButton />
          </>
        ) : (
          <>
            <ProfileButton data={data} />
          </>
        )}
      </Stack>
    </Flex>
  )
}
