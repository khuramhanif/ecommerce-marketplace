import React, { FC } from 'react'
import { Navbaritems } from '../../utills/Navbar-items'
import Link from 'next/link'

const DropDown :FC<{item:Navbaritems}> = ({item}) => {
  return (
    <ul>
        {item.dropDownData?.map((item:Navbaritems, id:number)=>(
            <li key={id}>
                <Link href={item.href}>{item.label}</Link>
            </li>
        ))}
    </ul>
  )
}

export default DropDown