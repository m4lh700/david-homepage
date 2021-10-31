import React from 'react'
import Link from 'next/link'

export const NavLink = ({href, title, icon}) => {
    return (
            <Link href={href} scroll={false}>
                <a href="#responsive-header" className="mr-6 sm:mr-8 flex flex-col relative text-xl font-thin block mt-4 lg:inline-block lg:mt-0 lg:text-center text-teal-200 mr-4 hover:underline text-dark dark:text-white">
                    {icon}
                    {title}
                </a>
            </Link>
    )
}
