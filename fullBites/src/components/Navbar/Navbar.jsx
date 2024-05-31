import React from 'react'
import { FaCaretDown, FaUser } from 'react-icons/fa';

const NavLinks = [
    {
        id: 1,
        name: 'Home',
        link: '#'
    },
    {
        id: 1,
        name: 'About',
        link: '#',
    },
    {
        id: 1,
        name: 'Contact',
        link: '#',
    }
];

const DropDownLinks = [
    {
        id: 1,
        name: 'Vegetables',
        link: "/#",
    },
    {
        id: 2,
        name: 'Fruits',
        link: "/#",
    },
    {
        id: 3,
        name: 'Grains',
        link: "/#",
    }
]

export default function Navbar() {
  return (
    <div className='bg-white shadow-sm'>
        <div className="container flex justify-between py-4 sm:py-3">
            {/* logo-section */}
            <div className="font-bold text-3xl">
                FullBites
            </div>
            {/* NavLinks section */}
            <div>
                <ul className="flex items-center gap-10">
                    {
                        NavLinks.map(({id, name, link}) => (
                            <li key={id}>
                                <a href={link} className="inline-block
                                hover:text-primary text-xl font-semibold">
                                    {name}
                                </a>
                            </li>
                        ))
                    }
                    {/* drop down and links */}
                    <li className='cursor-pointer group'>
                        <a href="#" className="inline-block
                        hover:text-primary text-xl font-semibold">
                            <div className='flex items-center
                            gap-[2px] py-2'>
                                Dropdown
                                <span>
                                    <FaCaretDown className='group-hover:rotate-180 transition-all duration-300'/>
                                </span>
                            </div>
                        </a>
                        {/* DropDown section */}
                        <div className="absolute z-[999]
                        hidden group-hover:block w-[200px]
                        bg-white text-black shadow-md p-2">
                            <ul>
                                {
                                    DropDownLinks.map(({id, name, link}) => (
                                        <li key={id}>
                                            <a href={link} className='
                                            inline-block hover:text-primary text-xl font-semibold
                                            hover:bg-primary/20 rounded px-1'>
                                                {name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                    {/* login button section */}
                    <li>
                        <button className='flex justify-center items-center
                        gap-2 bg-secondary text-xl h-[40px]
                        text-white px-5 py-2 hover:scale-105 duration-300'>
                            <FaUser className='text-xl'/>
                            <span>My Account</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
