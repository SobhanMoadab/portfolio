'use client'

import Link from 'next/link'
import '../../styles/global.css'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function DashboardRootLayout({ children }: any) {
    const [showOverlay, setShowOverlay] = React.useState(false)
    const pathName = usePathname()

    function toggleOverlay(e: React.MouseEvent) {
        setShowOverlay(!showOverlay)
        console.log({ pathName: pathName })
    }


    React.useEffect(() => {
        setShowOverlay(false)
    }, [pathName])

    return (
        <html lang="en">
            <head />
            <body className="font-roboto w-full">
                <nav className="w-full h-20 fix shadow bg-black text-slate-200
             box-border md:flex md:items-center md:justify-between p-5">
                    <div className="flex justify-between items-center w-full">
                        <Link className="text-2xl font-mono xl:ml-40" href='/'>
                            Sobhan Moadab
                        </Link>
                        {showOverlay &&
                            <div className="p-14 bg-black flex flex-col fixed inset-0 z-40 cursor-pointer font-light">
                                <div className="mx-2 my-3 md:my-0 p-1">
                                    <Link href='/' className="text-4xl hover:text-cyan-700 font-normal duration-500" onClick={toggleOverlay}>
                                        ~
                                    </Link>
                                </div>
                                <div className="mx-2 my-3 md:my-0 p-1">
                                    <Link className="text-4xl hover:text-cyan-700 font-normal duration-500" href='/articles'>
                                        /articles
                                    </Link>
                                </div>
                                <div className="mx-2 my-3 md:my-0 p-1">
                                    <Link className="text-4xl hover:text-cyan-500 font-normal duration-500" href='/projects'>
                                        /projects
                                    </Link>
                                </div>
                                <div className="mx-2 my-3 md:my-0 p-1">
                                    <Link className="text-4xl hover:text-cyan-300 font-normal duration-500" href='https://github.com/SobhanMoadab'>
                                        /github
                                    </Link>
                                </div>
                                <div className="mx-2 my-3 md:my-0 p-1">
                                    <Link className="text-4xl hover:text-cyan-100 font-normal duration-500" href='/contact'>
                                        /contact
                                    </Link>
                                </div>
                            </div>
                        }
                        <span className="mx-2 cursor-pointer md:hidden block z-50" onClick={toggleOverlay}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </span>
                    </div>
                    <ul className="font-mono mr-52 md:mr-0 md:flex md:items-center z-[-1] md:z-auto md:static absolute
                w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500" >
                        <li className="mx-4 my-6 md:my-0 p-1">
                            <Link className="text-2xl hover:text-cyan-700 duration-500" href='/articles'>
                                Articles
                            </Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0 p-1">
                            <Link className="text-2xl hover:text-cyan-500 duration-500" href='/projects'>
                                Projects
                            </Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0 p-1">
                            <Link className="text-2xl hover:text-cyan-300 duration-500" href='https://github.com/SobhanMoadab'>
                                Github
                            </Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0 p-1">
                            <Link className="text-2xl hover:text-cyan-100 duration-500" href='/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <main className="flex w-full p-8 max-w-[980px] mx-auto">
                    {children}
                </main>
            </body>
        </html>
    )
}