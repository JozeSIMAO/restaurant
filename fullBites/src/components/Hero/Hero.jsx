import React from 'react'
import HeroImg from '../../assets/hero.png'
import HeroBg from '../../assets/heroBg.png'
import PrimaryButton from '../Shared/PrimaryButton'

const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    position: 'relative',
}

const Hero = () => {
  return (
    <div style={BgStyle} className='relative z-[-1] overflow-hidden'>
        <div className="container py-16 sm:py-0 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 
            place-items-center min-h-[600px]">
                {/* text-content section */}
                <div className='space-y-7 text-dark 
                order-2 sm:order-1'>
                    <h1 data-aos="fade-up" className='text-5xl'>Fresh & Healthy Meal Plan
                    <span className='text-secondary font-cursive text-7xl mr-2 ml-2'>Delivery</span>
                        in Miami
                    </h1>
                    <p data-aos="fade-up"
                        data-aos-delay="300" className='lg:pr-64'>
                        Delicious Meals Delivered To Your
                        Doorstep from $132.95 per week
                    </p>
                    {/* button section */}
                    <div data-aos="fade-up"
                        data-aos-delay="500">
                        <PrimaryButton />
                    </div>
                </div>
                {/* Image section */}
                <div data-aos="fade-down" className='relative z-30 order-1 sm:order-2'>
                    <img src={HeroImg} alt=""
                    className='w-full sm:scale-125 z-[10] sm:translate-y-16' style={{zIndex:1}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero