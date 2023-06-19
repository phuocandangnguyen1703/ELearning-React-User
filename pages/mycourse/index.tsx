import React from 'react'
import {AiOutlineDown} from '@react-icons/all-files/ai/AiOutlineDown'
import {AiOutlineStar} from '@react-icons/all-files/ai/AiOutlineStar'
import {AiOutlineEye} from '@react-icons/all-files/ai/AiOutlineEye'
import {AiOutlinePlayCircle} from '@react-icons/all-files/ai/AiOutlinePlayCircle'
import {AiOutlineYoutube} from '@react-icons/all-files/ai/AiOutlineYoutube'
import {AiOutlineInstagram} from '@react-icons/all-files/ai/AiOutlineInstagram'
import {AiOutlineTwitter} from '@react-icons/all-files/ai/AiOutlineTwitter'
import BackGround from '../../assets/Rectangle 193.svg'
import Person from '../../assets/Ellipse 128.svg'
import Logo from '../../assets/Polygon 2.svg'
type Props = {}

const Mycourse = (props: Props) => {
  return (
    <div className='w-full flex flex-col'>
        {/* Header */}
        <div className='w-full h-32 flex flex-row  items-center justify-between'>
            <div className='relative pl-10 font-bold text-3xl text-[#5B5B5B]'>
                <p className='z-50'>TOTC</p>
                <div className='absolute w-6 h-6 bottom-8 left-4'>
                    <Logo/>
                </div>
            </div>
            <div className='flex flex-row content-center justify-items-center pr-8'>
                <a className="px-6 font-sans text-[#5B5B5B] text-xl " href="#">Home</a>
                <a className="px-6 font-sans text-[#5B5B5B] text-xl " href="#">Course</a>
                <a className="px-6 font-sans text-[#5B5B5B] text-xl " href="#">Career</a>
                <a  className="px-6 font-sans text-[#5B5B5B] text-xl "href="#">Blog</a>
                <a className="px-6 font-sans text-[#5B5B5B] text-xl " href="#">About Us</a>
                <div className=" flex  overflow-hidden">
                    <img className="inline-block h-8 w-8  mx-3 rounded-full ring-2 ring-black" src="{user.avatarUrl}" alt="{user.handle}"/>       
                </div>
                <div className='px-3 font-sans'>Lina</div>
                <div className='pt-2 pr-8'><AiOutlineDown/></div>
            </div>
        </div>

        <div className='relative flex items-center w-[93rem] justify-between'>
            <BackGround  className=''/>
            <div className='absolute top-10 left-12'>
                <Person className='rounded-full ring-8 ring-white bg-sky-500 '/>
            </div>
             <div className='flex flex-col absolute right-12 w-[60rem] h-80 rounded-lg  bg-gray-200/[0.8]'>
                <div className='flex  justify-between flex-row w-full'>
                    <h2 className='font-medium font font-sans text-back text-3xl pl-4 pb-2 pt-10'>John Anderson</h2>
                    <div className='btn mt-10 mr-4 bg-[#2F80ED]'>Enroll Now</div>
                 </div>
                 <p className='pl-4 text-slate-500 py-4'>Assistant Professor at Mcmaster University</p>
                 <p className='pl-4 text-xl py-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud</p>
                 <div className='flex flex-row w-full justify-between  py-4 '>
                    <div className=' flex flex-row justify-between w-1/2 pl-4 py-4'>
                        <div className='flex flex-row items-center'>
                            <div>
                                <AiOutlineStar/>
                            </div>
                            <p>
                                4.9 instructor Rating
                            </p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <div>
                                <AiOutlineEye/>
                            </div>
                            <p>
                                1,592 Students
                            </p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <div>
                                <AiOutlinePlayCircle/>
                            </div>
                            <p>
                                Courses
                            </p> 
                        </div>
                    </div>
                    <div className='flex flex-row pr-4 items-center'>
                        <a href='#' className='mx-3 w-8 h-8 bg-[#2F80ED]  flex justify-center items-center   rounded-full'><AiOutlineTwitter className='fill-white '/></a>
                        <a href='#' className='mx-3  w-8 h-8 bg-[#2F80ED] flex justify-center items-center  items-center  rounded-full'><AiOutlineYoutube className='fill-white'/></a>
                        <a href='#' className='mx-3 w-8 h-8 bg-[#2F80ED]  flex justify-center items-center  rounded-full'><AiOutlineInstagram className='fill-white'/></a>
                    </div>
                 </div>
             </div>
            

        </div>
    </div>
   
  )
}

export default Mycourse;