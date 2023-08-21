   

import {
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { AppContext } from '@src/context/AppContext'
import { IItem } from '@src/model'
import Link from 'next/link'
import { useContext } from 'react'
import { BsTrash } from 'react-icons/bs'

interface CartItemProps {
  item: IItem
  onClick: React.MouseEventHandler<HTMLAnchorElement>
}

export const CartItem = ({ item, onClick }: CartItemProps) => {
  const { onClose } = useDisclosure()
  const { increaseCount, decreaseCount, removeItem } = useContext(AppContext)

  return (
    <Grid
      alignItems='center'
      templateColumns={{ base: 'repeat(6, 1fr)', lg: 'repeat(8, 1fr)' }}
      borderBottomWidth='1px'
      borderBottomColor='gray.200'
      my='2'
    >
      <GridItem>
        <Link href={`/products/${item.slug}`} onClick={onClick}>
          <Image
            src={item.mainImage}
            objectFit='cover'
            boxSize='40px'
            rounded='full'
            borderWidth='1px'
            borderColor='gray.300'
            alt={item.name}
          />
        </Link>
      </GridItem>
      <GridItem colSpan={{ base: 5, lg: 3 }}>
        <Link href={`/products/${item.slug}`} onClick={onClick}>
          <Text fontSize='sm'>{item.name}</Text>
        </Link>
      </GridItem>
      <GridItem colSpan={{ base: 3, lg: 2 }} justifyContent='flex-end'>
        <HStack my='0.5rem' justifyContent='flex-end'>
          <Button onClick={() => decreaseCount('cart', item.id)}>-</Button>
          <Input
            type='number'
            value={item.count}
            readOnly={true}
            minW='52px'
            maxW='55px'
            min='1'
            max='20'
          />
          <Button
            onClick={() => {
              increaseCount('cart', item.id)
            }}
          >
            +
          </Button>
        </HStack>
      </GridItem>
      <GridItem textAlign='right' colSpan={{ base: 2, lg: 1 }}>
        <Text fontWeight='bold'>$ {item.price * item.count}</Text>
      </GridItem>
      <GridItem textAlign='right'>
        <Button
          variant='ghost'
          colorScheme='red'
          onClick={() => removeItem('cart', item.id)}
        >
          <BsTrash />
        </Button>
      </GridItem>
    </Grid>
  )
}
