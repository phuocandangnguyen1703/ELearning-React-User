import React,{useState} from 'react'
import Button, { EButton } from './Button'
import { EColor } from "~/types/colors";
import {AiOutlineDown} from '@react-icons/all-files/ai/AiOutlineDown'
import {HiOutlineUserGroup} from '@react-icons/all-files/hi/HiOutlineUserGroup'
import {BiTime} from '@react-icons/all-files/bi/BiTime'
import {AiOutlineShoppingCart} from '@react-icons/all-files/ai/AiOutlineShoppingCart'
import CourseItem from './CourseItem'
import Ractange from '../assets/Rectangle 1944.svg'
import Thietke from '../assets/thiet-ke-do-hoa-so 1.svg'
type Props = {}

type courseDetail = {
    id:string,
    title:string,
    content:string,

}

const Mockdata =[
    {
        id:"1",
        title: "Javascript for beginer",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
        
    },
    {
        id:"2",
        title: "React js from a to z",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
    },
    {
        id:"3",
        title: "Nodejs for beginer",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
    },
    {
        id:"4",
        title: "Javascript for beginer",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
    },
    {
        id:"5",
        title: "React js from a to z",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
    },
    {
        id:"60",
        title: "Nodejs for beginer",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
    },
    {
        id:"60",
        title: "Nodejs for beginer",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
    },
    {
        id:"60",
        title: "Nodejs for beginer",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
    },
    {
        id:"60",
        title: "Nodejs for beginer",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
    },
    {
        id:"60",
        title: "Nodejs for beginer",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
    },
    {
        id:"60",
        title: "Nodejs for beginer",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
    },
    {
        id:"60",
        title: "Nodejs for beginer",
        content :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde consectetur ea reiciendis nesciunt. Praesentium et rerum harum nisi veritatis iste.",
    },

]

const PopularCourse = (props: Props) => {
    const [id,setId] = useState<string>(Mockdata[0].id)
    const [courseDetail,setCourseDetail] = useState<courseDetail>(Mockdata[0])


  return (
    <div className='w-full flex-col justify-center mt-4 bg-white'>
        {/* header */}
        <div className='flex justify-center items-center w-full px-14'>
            <div className='flex flex-row items-center w-full justify-between'>
                <div  className='flex flex-row text-2xl text-2xl items-center font-bold py-4'>
                    <h3 className='uppercase '>khóa học phổ biến</h3>
                    <div className='flex flex-row items-center font-semibold text-blue-600'>
                        <h3 className='uppercase px-3 '>Thiết kế web</h3>
                        <div className='bg-blue'> 
                        <AiOutlineDown/>
                        </div>
                    </div>
                </div>
                {/* <Button 
                className = "text-blue-600/100 flex items-center"
                type={EButton.Border}
                onClick={e => console.log("Check button")}
                color ={EColor.White}
                width={8 *16}
                height={32}
                outlineColor ={EColor.Blue}
                hoverColor={EColor.Blue}
                colorText='blue'
                children = {<p>Xem tất cả</p>}
                />        */}

                <button className='btn px-12 rounded-lg bg-white border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF]'>
                    Xem tất cả
                </button>
            </div>
        </div>
        <div className='flex px-14 py-6 '>
            {/* Course list */}
            <div className=' w-2/5 h-[792px] overflow-x-auto overflow-x-hidden h-64 flex flex-col'>
                {Mockdata.map((value)=>
                    <button onClick={()=>setCourseDetail(value)}>
                        <CourseItem 
                        title={value.title}
                        content={value.content}/>
                    </button>
                )}
                    
            </div>
            {/* Course detail */}
            <div className='flex w-3/5 pl-20'>
                <div className='flex flex-col'>
                    <div>
                        <Thietke/>
                    </div>
                    <div className='flex w-full justify-between flex-row py-4'>
                        <div className='h-7 w-20 text-blue-600 text-center justify-center bg-blue-200 rounded-md'>
                            <p className='text-blue-600'>Sáng tạo</p>
                        </div>                    
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className='px-2 font-bold'>4</p>
                                <p className='px-2'>(1200)</p>
                            </div>
                    </div>
                    <div className='text-2xl text-2xl items-center font-bold py-2'>
                        {courseDetail?.title}
                    </div>
                    <div className='py-2'>
                        <p>{courseDetail?.content}</p>
                    </div>
                    <div className='flex flex-row items-center font-bold py-2'>
                        <HiOutlineUserGroup className=''/>
                        <p className='px-2'>1200 sinh viên đã ghi danh</p>                       
                    </div>
                    <div className='flex flex-row items-center font-bold py-2'>
                        <BiTime className=''/>
                        <p className='px-2'> 12 tháng 2 năm 2023</p>
                         
                    </div>
                    <div className='text-2xl text-2xl items-center font-bold text-orange-400 py-2'> 4.700.000đ</div>
                    <button className='btn btn-blue border-none rounded-lg bg-[#0066FF] uppercase flex flex row hover:bg-sky-500'>
                        <AiOutlineShoppingCart className='text-xl'/>
                        <p className='px-4'>Đăng ký ngay</p>
                    </button>
                </div>
                    
            </div>
        </div>
    </div>
  )
}
 
export default PopularCourse