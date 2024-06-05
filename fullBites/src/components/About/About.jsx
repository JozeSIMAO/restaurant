import React from 'react'
import vectorImg from '../../assets/vector-wave.png'
import polygon from '../../assets/polygon.png'
import { FaCaretDown, FaUser } from 'react-icons/fa';

const bgStyle = {
    backgroundImage: `url(${polygon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: "100%",
    height: "100%",
    position: "relative",
}

export default function About({ setShowPopUp }) {
  return (
    <>
        <div data-aos="fade-up" style={bgStyle} className='py-14'>
            <div className='container min-h-[500px] relative
            z-10'>
                <h1 className='pt-20 tracking-wider text-4xl
                font-semibold text-white text-center'>
                    About Us
                </h1>

                {/* card section */}
                <div className='bg-white/80 p-10 my-10'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis aspernatur optio culpa id sit soluta architecto rerum debitis ipsa, voluptate omnis velit molestiae, necessitatibus numquam alias doloribus dolorem voluptates!
                    Perferendis beatae incidunt veritatis a ducimus quibusdam, doloremque minus distinctio est adipisci officiis quos, numquam mollitia eos blanditiis temporibus commodi dolores provident ea animi velit veniam omnis! Aspernatur, laboriosam neque!
                    Blanditiis minima incidunt possimus sint iusto doloremque sunt, neque fuga libero tempore minus deserunt amet, repellendus consectetur veritatis vero! Repellendus, ipsum quidem. Non quibusdam nemo nulla error delectus officia esse.
                    Quaerat, natus placeat.
                    <div className='pt-10 flex justify-center'>
                        <button className='flex justify-center items-center
                        gap-2 bg-secondary text-xl h-[40px]
                        text-white px-5 py-2 hover:scale-105 duration-300'
                        onClick={() => {setShowPopUp(true)}}>
                            <FaUser className='text-xl'/>
                            <span>My Account</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* wave vector */}
            <div className='absolute top-0 right-0 w-full'>
                <img src={vectorImg} alt="" className='mx-auto'/>
            </div>
        </div>
    </>
  )
}
