
"use client"
import React from 'react'
import style from './menuLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink =({item}) => {
    const pathname = usePathname()

    console.log(pathname)
  return (
    <Link href={item.path} className={`${style.container} ${pathname===item.path && styles.active}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink