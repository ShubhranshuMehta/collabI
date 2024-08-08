import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({ children }: HeaderProps) => {
    return (
        <div className='header'>
            <Link href='/' className="md:flex items-center">
                <Image
                    src="/assets/icons/logo-icon.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                    className='mr-3 hidden md:block'
                />

                <h1 className='font-extrabold '>CollabI</h1>

            </Link>

            {children}
        </div>
    )
}

export default Header