import { Box, Flex } from '@chakra-ui/react'
import { Session } from 'next-auth'
import { SignInButton } from '../Buttons'
import { Cart } from '../Cart/Cart'
import { ProfileButton } from '../ProfileButton'
import { Search } from '../Search/Search'
import { Wishlist } from '../Wishlist/Wishlist'
import { MobileNavMenu } from './MobileNavMenu'

interface MobileNavProps {
  data: Session
}

export function MobileNav ({ data }: MobileNavProps) {
  return (
    <>
      <Flex
        justify='space-between'
        alignItems='center'
        display={{ base: 'flex', lg: 'none' }}
        px={{ base: '1rem', lg: '2rem' }}
        py='1rem'
        borderBottom='1px'
        borderColor='gray.200'
      >
        <MobileNavMenu />

        <Flex justify='flex-end' gap={2}>
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
        </Flex>
      </Flex>
      <Box px='2rem' py='1rem' display={{ base: 'block', lg: 'none' }}>
        <Search />
      </Box>
    </>
  )
}
