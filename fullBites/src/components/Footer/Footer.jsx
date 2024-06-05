import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <div className="text-white">
        <div className="bg-gradient-to-b 
       from-primary to-primaryDark">
          <h1 className='py-10 text-3xl font-bold
          text-yellow text-center'>Contact Us</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2
          md:grid-cols-3 gap-14 border-b-2 border-white
          pb-6">
            {/* address section */}
            <div className="text-center space-y-4">
              <div className='flex justify-center'>
                <IoLocationSharp className="text-5xl"/>
              </div>
              <p>
                123 Main Street, New York, NY 10001
                <br /> United States, Earth, Milky Way,
                Universe
              </p>
            </div>
            {/* Email Section */}

            <div className="text-center space-y-4">
              <div className='flex justify-center'>
                <MdEmail className="text-5xl"/>
              </div>
              <div>
              <p>info@goodfood.com</p>
              <p>hr@goodfood.com</p>
              </div>
            </div>
            {/* Phone Section */}

            <div className="text-center space-y-4">
              <div className='flex justify-center'>
                <FaPhoneAlt className="text-5xl"/>
              </div>
              <div>
              <p>+102 4792 359 80 - Sales and Services</p>
              <p>+27 815 639 825 - Wiring Queries</p>
              <p>+101 489 2384 209 - WhatsApp</p>
              </div>
            </div>
          </div>
          {/* copyright section */}

          <div className='flex justify-between p-4 item-center'>
              <p>
                &copy; 2021 Good Food. All Rights Reserved.
              </p>
              <div className='flex items-center gap-4'>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms & Conditions</a>
                <p>
                  Designed by <span className="text-yellow">FullBites</span>
                </p>

              </div>
            </div>
        </div>
      </div>
    </>
  )
}
