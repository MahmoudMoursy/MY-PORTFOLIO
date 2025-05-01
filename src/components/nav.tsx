'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import avatar from '../../public/WhatsApp Image 2024-09-26 at 12.45.44 PM.jpeg'
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About me' },
    { href: '/services', label: 'What I Do' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/resume', label: 'My resume' },
    // { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Me' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 px-9 py-2     flex justify-between items-center bg-white/80 backdrop-blur-sm"
    >
      <Image
        src={avatar}
        alt=""
        width={80}
        height={10}
        className=" rounded-full  "
        priority
      />
      <Link href="/" className="text-2xl font-bold tracking-wider">
        MAHMOUD
        <span className="block text-xs text-center tracking-[0.3em] mt-1">
          I AM Front-end and Mobile developer

        </span>
      </Link>

      {/* <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {menuItems?.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}

      <button
        className="block md:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {isOpen && (
        <nav className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems?.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </motion.header>
  )
}
