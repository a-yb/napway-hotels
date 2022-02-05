import { createContext, FC, useState } from 'react'
import { HamburgerMenuContextState } from '../types/HamburgerContextState'

const contextDefaultValues: HamburgerMenuContextState = {
  isActive: false,
  toggleMenu: () => {},
}

export const HamburgeMenuContext =
  createContext<HamburgerMenuContextState | null>(contextDefaultValues)

export const HamburgerMenuProvider: FC = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(
    contextDefaultValues.isActive
  )

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <HamburgeMenuContext.Provider value={{ isActive, toggleMenu }}>
      {children}
    </HamburgeMenuContext.Provider>
  )
}
