"use client"

import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
<>

  <div className="h-20 w-full bg-[red] flex items-center justify-around">

    <h1>LOGO</h1>

      <div className="flex  gap-10  "> 

      <Link href="/">
      <h1>Home</h1>
      </Link>

      <Link href="/about">
       <h1>About</h1>
      </Link>
      
      <Link href="/contacts">
      <h1>Contacts Us</h1>
      </Link>

      <Link href="/services">
      <h1>Services</h1>
      </Link>

      </div>
      <div> 
        
      <h1>User</h1>

      </div>



  </div>


</>
  );
}

