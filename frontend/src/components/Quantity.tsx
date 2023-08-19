'use client'

import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import React from 'react'

interface IQuantityProps {
  step?: number
  defaultValue?: number
  min?: number
  max?: number
  isDisabled: boolean
  setQuantity: (valueAsString: string, valueAsNumber: number) => void
}

export const Quantity = ({
  step = 1,
  defaultValue = 1,
  min = 1,
  max = 20,
  isDisabled = false,
  setQuantity
}: IQuantityProps) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step,
      defaultValue,
      min,
      max,
      isDisabled,
      onChange (valueAsString, valueAsNumber) {
        setQuantity(valueAsString, valueAsNumber)
      }
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW='140px' my='0.5rem'>
      <Button {...dec} isDisabled={isDisabled}>
        -
      </Button>
      <Input {...input} readOnly={true} minW='52px' />
      <Button {...inc} isDisabled={isDisabled}>
        +
      </Button>
    </HStack>
  )
}
