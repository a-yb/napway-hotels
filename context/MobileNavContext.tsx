import type { FC } from 'react'
import React, { createContext, useState } from 'react'
import type { MobileNavContextState } from '../types/MobileNavContextState'

const contextDefaultValues: MobileNavContextState = {
  isActive: false,
  toggleMenu: () => {},
}

export const MobileNavContext =
  createContext<MobileNavContextState>(contextDefaultValues)

const MobileNavProvider: FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => setIsActive(!isActive)

  return (
    <MobileNavContext.Provider value={{ isActive, toggleMenu }}>
      {children}
    </MobileNavContext.Provider>
  )
}

export default MobileNavProvider
