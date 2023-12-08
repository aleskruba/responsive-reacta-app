import React from 'react'

function FooterLinks({Links}) {
  return (
    <>
    {Links.map((link, index) => (
        <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>
            <a href=''>{link.name}</a>
        </li>
    ))}
    </>
  )
}

export default FooterLinks