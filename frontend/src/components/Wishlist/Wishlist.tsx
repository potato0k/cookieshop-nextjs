   

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { AppContext } from '@src/context/AppContext'
import { calculateItemsTotal } from '@src/helpers'
import Link from 'next/link'
import { useContext, useRef } from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { WishlistItem } from './WishlistItem'

export const Wishlist = () => {
  const {
    state: { wishlist },
    resetItems,
    addItem
  } = useContext(AppContext)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any>()

  const handleCheckout = () => {
    resetItems('checkout')
    wishlist.forEach(wishlistItem => {
      addItem('checkout', wishlistItem, wishlistItem.count)
    })

    onClose()
  }

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant='ghost'
        color='brand.primary'
        _hover={{
          bgColor: 'transparent'
        }}
        pos='relative'
        px={{ base: '0.4rem' }}
      >
        <BsHeartFill /> <Text mx='1.5'>Wishlist</Text>
        {wishlist.length !== 0 && (
          <Flex
            pos='absolute'
            top='0px'
            right='1px'
            bgColor='brand.primaryLight'
            boxSize='15px'
            rounded='full'
            color='white'
            fontSize='0.6rem'
            align='center'
            justify='center'
          >
            {wishlist.length}
          </Flex>
        )}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='lg'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color='brand.primary'>
            Wishlist ( {wishlist.length} Items )
          </DrawerHeader>
          <DrawerBody>
            {wishlist.length === 0 ? (
              <>Your Wishlist is Empty</>
            ) : (
              wishlist.map(item => (
                <WishlistItem key={item.id} item={item} onClick={onClose} />
              ))
            )}
          </DrawerBody>
          {wishlist.length !== 0 && (
            <DrawerFooter justifyContent='space-between'>
              <Box>
                <Button
                  variant='outline'
                  mr={3}
                  onClick={() => resetItems('wishlist')}
                >
                  Clear Wishlist
                </Button>
              </Box>
              <Box fontWeight='bold'>
                Total: $ {calculateItemsTotal(wishlist)}
              </Box>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}
