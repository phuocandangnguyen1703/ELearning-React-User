import React from 'react'
import ImageBook1 from '../assets/image1.svg'
import ImageBook from '../assets/book.svg'
import ImageNote from '../assets/note.svg'
import ImageNews from '../assets/news.svg'
import ImageCourse from '../assets/course.svg'
type Props = {}

const DanhChoBan = (props: Props) => {
  return (
    <div className='px-80'>
        <div>
            {/* header */}
            <div className='flex justify-center items-center w-full'>
                <div className='flex flex-row items-center w-full justify-between'>
                    <div  className='flex flex-row text-2xl text-2xl items-center font-bold py-4 text-black	font-bold'>
                        <h3 className='uppercase '>Dành cho bạn</h3>
                    </div>
                    <button className='btn px-12 rounded-lg bg-white border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF]'>
                        Xem tất cả
                    </button>
                </div>
            </div>
            {/*end header*/}
        </div>
        <div className='flex flex-row'>
            <div className='flex flex-col w-3/5 h-[556px] '>
                <div className='h-1/2 bg-[#C5EDFF] relative text-black rounded-3xl mb-8'>
                    <div className='absolute top-10 start-10'>
                        <h3 className='font-bold'>LỘ TRÌNH CỦA BẠN</h3>
                        <p>Tiến độ 15%</p>
                    </div>
                    <div className='absolute bottom-0 left-0'>
                        <ImageBook1/>
                    </div>
                    <div className='absolute bottom-0 right-0'>
                        <ImageBook/>
                    </div>
                </div>
                <div className='flex flex-row h-1/2 '>
                    <div className='w-1/2 bg-[#F9DAE3] text-black rounded-3xl relative mr-8'>
                        <div className='absolute top-10 start-10'>
                            <h3 className='font-bold'>BÀI KIỂM TRA</h3>
                            <p>Comming soon</p>
                        </div>
                        <div className='absolute bottom-10 right-10'>
                            <ImageNote/>
                        </div>
                    </div>
                    <div className='w-1/2 bg-[#FFE79E] text-black rounded-3xl relative' >
                        <div className='absolute top-10 start-10'>
                            <h3 className='font-bold'>GIẤY CHỨNG NHẬN</h3>
                            <p>Comming soon</p>
                        </div>
                        <div className='absolute bottom-10 right-10'>
                            <ImageNews/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-2/5 text-black relative' >
                <div className='position: absolute; absolute top-10 start-0'>
                    <h3 className='font-bold'>GIẤY CHỨNG NHẬN</h3>
                    <p>Comming soon</p>
                </div>
                <div className='absolute bottom-0 right-0'>
                    <ImageCourse/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default DanhChoBan