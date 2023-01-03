import React, { useState, useContext } from 'react'
import sublinks from './data'

const stripe = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [content, setContent] = useState([])

  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)
  const openSubmenu = (text, coordinates = {}) => {
    const newSublinks = sublinks.filter((item) => item.page === text)
    setContent(newSublinks)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => setIsSubmenuOpen(false)
  return (
    <stripe.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        content,
      }}
    >
      {children}
    </stripe.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(stripe)
}
