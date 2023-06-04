import React from 'react'
import Cover from '../assets/png-cover.svg'
import Loa from '../assets/fshdgds 1.svg'
type Props = {}

const Introduce = (props: Props) => {
  return (
    <div className='relative h-96 relative bg-sky-100 flex justify-between w-full flex-row  '>
        <div className='flex h-full w-1/4 flex-col justify-center mx-12 '>
            <a href="#" className='text-blue-600 py-2'>About us</a>
            <h2 className='text-3xl uppercase font-bold py-2'>EDUPATH tiên phong lộ trình học it</h2>
            <p className='py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='absolute top-2 left-1/3 '>
            <Cover/>
        </div>
        <div className='w-1/4 h-full relative flex flex-col justify-center mr-24'>
            <div className='absolute bottom-52 left-60'>
                <Loa/>
            </div>
            <div className='w-full h-80 bg-white mx-12 flex flex-col px-4  justify-center'>
                <h2 className='text-blue-600  text-xl uppercase font-bold my-1'>Trở thành giảng viên</h2>
                <h3 className='text-lg text-blue-600 my-2'>Tại sao không ?</h3>
                <p className='text-justify'>Nếu bạn đã tự tin vào kiến thức của bản thân, đừng ngần ngại trở thành người hướng dẫn.
                    Cùng chia sẻ kiến thức của bạn với những học viên khác nhé!</p>
                <div className='btn mt-4 bg-blue-500  hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF]'>Đăng ký ngay</div>
            </div>
        </div>
       
    </div>
  )
}

export default Introduce