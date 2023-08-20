'use client'

import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box
} from '@chakra-ui/react'

import React, { useRef } from 'react'
import { Logo } from '../Logo'
import { navItems } from '@src/helpers'
import Link from 'next/link'

export const MobileNavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any>()

  return (
    <>
      <Button ref={btnRef} color='brand.primary' onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo onclick={onClose}/>
          </DrawerHeader>

          <DrawerBody>
            {navItems.map(navItem => (
              <Link href={navItem.href} onClick={onClose}>
                <Box
                  key={navItem.label}
                  p='0.5rem'
                  rounded='sm'
                  fontSize='xl'
                  _hover={{ bgColor: 'brand.primaryLight', color: 'white' }}
                >
                  {navItem.label}
                </Box>
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
