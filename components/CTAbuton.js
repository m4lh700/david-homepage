import React from 'react'
import Link from 'next/link'

export default function CTAbuton({text, link, size}) {
    return (
        <button className={'border text-black font-bold py-2 px-4 rounded-lg bg-purple-700 text-white dark:bg-gray-700 dark:text-white dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-gray-700 ' + (size ? size : '')}>
            <Link href={link}>
                <a href={link}>{text}</a>
            </Link>
        </button>
    )
}
