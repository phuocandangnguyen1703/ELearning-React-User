import { Content } from 'next/font/google'
import React from 'react'
import Image from 'next/image'
import Ractange from '../assets/Rectangle 1944.svg'
type Props = {
    title?: string,
    content?: string,
 
}

const CourseItem = (props: Props) => {
    const {title, content} = props
  return (
    <div className='flex flex-row p-4 w-full bg-stone-100'>
        <div className='flex'>
            <Ractange/>
        </div>
        <div className='flex flex-col  p-4  truncate'>
            <div className=' font-bold text-lg justify-start flex overflow-hidden '>
                {title}
            </div>
            <div className='inline-block text-lg font-light py-2 text-sm truncate text-ellipsis'>              
                {content}              
            </div>

        </div>
    </div>
  )
}
export default CourseItem