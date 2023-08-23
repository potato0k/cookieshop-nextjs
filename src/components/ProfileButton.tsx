import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import React from 'react'
import { SignOutButton } from './Buttons'
import { Session } from 'next-auth'

interface ProfileButtonProps {
  data: Session
}

export const ProfileButton = ({ data }: ProfileButtonProps) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        bg='transparent'
        _hover={{ bg: 'brand.primaryLight' }}
        _expanded={{ bg: 'brand.primaryLight' }}
        rounded='full'
        p='0'
      >
        <Image
          boxSize='2rem'
          rounded='full'
          src={data.user?.image || ''}
          alt={data.user?.name || ''}
          mx='auto'
        />
      </MenuButton>
      <MenuList  px='0'>
        <MenuItem bg= 'transparent' px='0'>
          <SignOutButton />
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
