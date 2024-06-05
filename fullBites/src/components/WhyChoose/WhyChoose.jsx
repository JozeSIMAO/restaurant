import React from 'react'

export default function WhyChoose() {
  return (
    <>
    <div data-aos="fade-up" className="py-14 md:py-28 bg-gray-50">
        <div className="container">
            <h1 className='pb-16 tracking-wider
            text-2xl font-semibold text-dark
            text-center'>
                Why Choose Us
            </h1>
            {/* card section */}
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4
                gap-14 sm:gap-4">
                    {/* 1st card */}
                    <div>
                        <div className='flex justify-center'>
                            <img src="https://img.icons8.com/ios/50/000000/healthy-food.png" alt="" className='w-16'/>
                        </div>
                        <h1 className='text-center text-lg font-semibold
                        py-4'>Healthy Food</h1>
                        <p className='text-center text-sm text-gray-500'>
                            We provide healthy and delicious food
                            to our customers.
                        </p>
                        <div className="flex justify-center">
                            <button className='text-primary font-semibold
                            py-2 px-4 mt-4 border border-primary
                            rounded-full'>Read More</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <img src="https://img.icons8.com/car" alt="" className='w-16'/>
                        </div>
                        <h1 className='text-center text-lg font-semibold
                        py-4'>Quick Delivery</h1>
                        <p className='text-center text-sm text-gray-500'>
                            Fast Deliveries depending on rush hour or distance from our Shops.
                        </p>
                        <div className="flex justify-center">
                            <button className='text-primary font-semibold
                            py-2 px-4 mt-4 border border-primary
                            rounded-full'>Read More</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <img src="https://img.icons8.com/ios/clock" alt="" className='w-16'/>
                        </div>
                        <h1 className='text-center text-lg font-semibold
                        py-4'>Open 24-Hours</h1>
                        <p className='text-center text-sm text-gray-500'>
                            We provide healthy and delicious food
                            to our customers.
                        </p>
                        <div className="flex justify-center">
                            <button className='text-primary font-semibold
                            py-2 px-4 mt-4 border border-primary
                            rounded-full'>Read More</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <img src="https://img.icons8.com/ios/children" alt="" className='w-16'/>
                        </div>
                        <h1 className='text-center text-lg font-semibold
                        py-4'>Support Our Charities</h1>
                        <p className='text-center text-sm text-gray-500'>
                            We give a great amount of our profits to charities and help the needy.
                        </p>
                        <div className="flex justify-center">
                            <button className='text-primary font-semibold
                            py-2 px-4 mt-4 border border-primary
                            rounded-full'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
