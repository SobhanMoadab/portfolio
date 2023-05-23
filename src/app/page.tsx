const Navbar = () => {
    return (
        <body className="bg-slate-200">
            <nav className="w-screen h-20 fix shadow bg-black text-slate-200
             box-border md:flex md:items-center md:justify-between p-5">
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-mono md:ml-0">
                        Sobhan Moadab
                    </span>
                    <span className="mx-2 cursor-pointer md:hidden block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </span>
                </div>
                <ul className="font-mono mr-52 md:mr-0 md:flex md:items-center z-[-1] md:z-auto md:static absolute
                w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500" >

                    <li className="mx-4 my-6 md:my-0 p-1">
                        <a href="#" className="text-2xl hover:text-cyan-500 duration-500">Articles</a>
                    </li>
                    <li className="mx-4 my-6 md:my-0 p-1">
                        <a href="#" className="text-2xl hover:text-cyan-500 duration-500">Projects</a>
                    </li>
                    <li className="mx-4 my-6 md:my-0 p-1">
                        <a href="#" className="text-2xl hover:text-cyan-500 duration-500">Github</a>
                    </li>
                    <li className="mx-4 my-6 md:my-0 p-1">
                        <a href="#" className="text-2xl hover:text-cyan-500 duration-500">Contact</a>
                    </li>
                </ul>
            </nav>
        </body>
    )
}

export default Navbar