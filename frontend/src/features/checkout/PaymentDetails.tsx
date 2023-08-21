   

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text
} from '@chakra-ui/react'
import { AppContext } from '@src/context/AppContext'
import { calculateItemsTotal, formatPrice } from '@src/helpers'
import React, { useContext, useEffect, useState } from 'react'

export const PaymentDetails = () => {
  const {
    state: { checkout }
  } = useContext(AppContext)

  const [subTotal, setSubTotal] = useState<number>(0)
  const [tax, setTax] = useState<number>(0)

  useEffect(() => {
    const subTotal = calculateItemsTotal(checkout)
    const tax = subTotal * 0.1
    setSubTotal(subTotal)
    setTax(tax)
  },[checkout])

  return (
    <Card borderWidth='1px' borderColor='gray.200' shadow='none'>
      <CardHeader>
        <Heading size='md'>Payment Details</Heading>
      </CardHeader>

      <CardBody>
        <Stack spacing='2rem'>
          <Flex>
            <Input rounded='full' />{' '}
            <Button
              bgColor='brand.primary'
              color='white'
              ml='-40px'
              px='2rem'
              rounded='full'
              _hover={{ bgColor: 'brand.primaryDark' }}
              _active={{ bgColor: 'brand.primaryDark' }}
            >
              Apply Coupon
            </Button>
          </Flex>

          <Divider mt='1rem' />
          <Box>
            <Heading size='xs' my='1rem'>
              Payment Option
            </Heading>
            <RadioGroup>
              <Stack>
                <Radio value='cod'>Cash On Delivery</Radio>
                <Radio value='mmp'>Mobile Money Payment</Radio>
                <Radio value='cc'>Credit Card (Master/Visa)</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Stack>
        <Divider mt='1rem' />

        <Box>
          <Flex justify='space-between' align='center' my='1rem'>
            <Text fontWeight='bold'>Sub Total</Text>
            <Text fontWeight='bold'>${formatPrice(subTotal)}</Text>
          </Flex>

          <Flex justify='space-between' align='center' my='1rem'>
            <Text fontWeight='bold'>Tax(10%)</Text>
            <Text fontWeight='bold'>${formatPrice(tax)}</Text>
          </Flex>

          <Flex justify='space-between' align='center' my='1rem'>
            <Text fontWeight='bold'>Coupon Discount</Text>
            <Text fontWeight='bold'>-${formatPrice(tax)}</Text>
          </Flex>

          <Flex justify='space-between' align='center' my='1rem'>
            <Text fontWeight='bold'>Shipping Cost</Text>
            <Text fontWeight='bold'>${formatPrice(0)}</Text>
          </Flex>
          <Divider />
          <Flex justify='space-between' align='center' my='1rem'>
            <Text fontWeight='bold'>Total</Text>
            <Text fontWeight='bold'>${formatPrice(subTotal)}</Text>
          </Flex>
        </Box>

        <Button
          bgColor='brand.primary'
          color='white'
          w='100%'
          rounded='full'
          _hover={{
            bgColor: 'brand.primaryDark'
          }}
          _active={{
            bgColor: 'brand.primaryDark'
          }}
        >
          Pay ${formatPrice(subTotal)}
        </Button>
        
      </CardBody>
    </Card>
  )
}
