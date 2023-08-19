import { useLocalStorage } from '@mantine/hooks'
import { IContext, IProduct, IState, ItemKey } from '@src/model'
import React, { ReactNode, createContext } from 'react'

export const AppContext = createContext<IContext>(null as any)

interface IAppContextProviderProps {
  children: ReactNode
}

const initializeState: IState = {
  cart: [],
  wishlist: [],
  checkout: []
}

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [state, setState] = useLocalStorage<IState>({
    key: 'cookie-shop',
    defaultValue: initializeState
  })

  const addItem = (key: ItemKey, product: IProduct, count?: number) => {
    setState(prevState => ({
      ...prevState,
      [key]: [...prevState[key], { ...product, count: count || 1 }]
    }))
  }
  const removeItem = (key: ItemKey, productId: string) => {
    setState(prevState => ({
      ...prevState,
      [key]: prevState[key].filter(item => item.id !== productId)
    }))
  }
  const increaseCount = (key: ItemKey, productId: string) => {
    const items = [...state[key]]
    const index = items.findIndex(item => item.id === productId)
    items[index].count += 1
    setState(prevState => ({ ...prevState, [key]: items }))
  }

  const decreaseCount = (key: ItemKey, productId: string) => {
    const items = [...state[key]]

    const index = items.findIndex(item => item.id === productId)

    if (index !== 1 && items[index].count > 1) {
      items[index].count -= 1
      setState(prevState => ({
        ...prevState,
        [key]: items
      }))
    }
  }

  const resetItems = (key: ItemKey) => {
    setState(prevState => ({
      ...prevState,
      [key]: []
    }))
  }

  const isAdded = (key: ItemKey, productId: string): boolean => {
    return state[key].some(item => item.id === productId)
  }

  return (
    <AppContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        increaseCount,
        decreaseCount,
        resetItems,
        isAdded
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
