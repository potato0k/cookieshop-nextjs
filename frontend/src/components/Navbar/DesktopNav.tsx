   

import { navItems } from '@/helpers';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { Cart } from '../Cart/Cart';

import { Logo } from '../Logo';
import { Search } from '../Search/Search';
import { Wishlist } from '../Wishlist/Wishlist';

export function DesktopNav() {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      display={{ base: 'none', lg: 'flex' }}
      px="2rem"
      py="1rem"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Stack direction="row" gap={6} flex={1} alignItems="center">
        <Box mr="1rem">
          <Logo />
        </Box>

        {navItems.map((navItem) => (
          <Box key={navItem.label}>
            <Link href={navItem.href}>{navItem.label}</Link>
          </Box>
        ))}

        <Search />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Wishlist />
        <Cart />
      </Stack>
    </Flex>
  );
}