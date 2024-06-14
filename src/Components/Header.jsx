import React from "react";


function Header() {

    return (
        <div>
            <header className='flex shadow-md py-4 px-4 sm:px-10 bg-[transparent] font-sans min-h-[70px] tracking-wide relative '>
                <div className='flex flex-wrap items-center justify-between gap-4 w-full'>
                    
                    

                    <div id="collapseMenu"
                        className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>

                        <ul
                            className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                             
                            <li className='max-lg:border-b max-lg:py-3 px-3'>
                                <a href='/' className='hover:text-[#007bff] text-[#ffffff] font-bold block text-base'>Home</a>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/team'
                                className='hover:text-[#007bff] text-[#ffffff] font-bold block text-base'>Team</a>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/faeture'
                                className='hover:text-[#007bff] text-[#ffffff] font-bold block text-base'>Feature</a>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/blog'
                                className='hover:text-[#007bff] text-[#ffffff] font-bold block text-base'>Blog</a>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/about'
                                className='hover:text-[#007bff] text-[#ffffff] font-bold block text-base'>About</a>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3 px-3'><a href='/contact'
                                className='hover:text-[#007bff] text-[#ffffff] font-bold block text-base'>Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className='flex items-center max-lg:ml-auto space-x-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
                            className="cursor-pointer hover:fill-[#007bff] inline fill-[#ffffff]">
                            <circle cx="10" cy="7" r="6" data-original="#000000" />
                            <path
                                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                data-original="#000000" />
                        </svg>




                    </div>
                </div>
            </header>

        </div>
    )

}

export default Header;