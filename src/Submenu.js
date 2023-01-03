import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, content } = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    container.current.style.left = `${location.center}px`
    container.current.style.top = `${location.bottom}px`
  }, [location, content])
  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
    >
      {content.map((item, index) => {
        const { page, links } = item
        let x = 2
        if (links.length === 3) x = 3
        if (links.length > 3) x = 4
        return (
          <section key={index}>
            <h4>{page}</h4>
            <div className={`submenu-center col-${x}`}>
              {links.map((link, index) => {
                const { label, icon, url } = link
                return (
                  <a key={index} href={url}>
                    {icon}
                    {label}
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </aside>
  )
}

export default Submenu
