import React,{useState}from 'react'
import Logo from '../assets/Logo.svg'
import {AiOutlineShoppingCart} from '@react-icons/all-files/ai/AiOutlineShoppingCart'
import {AiOutlineBell} from '@react-icons/all-files/ai/AiOutlineBell'
import { divide } from 'lodash'
type Props = {
  isLogin: boolean
}

const Header = (props: Props) => {
  const {isLogin} = props
  console.log(isLogin)
  return (
    <div className='w-full h-20 bg-sky-500 justify-between flex flex-row  items-center'>
        <div className='flex flex-row h-full px-12 items-center'>
          <Logo/>
          <h2 className='px-5 text-5xl font-sans text-white'>EDUPATCH</h2>

          <div className='w-0.5 bg-white h-8 mx-8'></div>         
         
         {!isLogin && <div className='text-white mr-8'> Khóa học của tôi</div>}

          <form className="flex items-center">                
              <div className="relative w-96 ">
                  <div className="absolute w-full inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
                  <input type="text" id="simple-search" className="w-full bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   pl-10 p-2.5 " placeholder="Bạn muốn học gì hôm nay ?" required/>
              </div>  
          </form>
        </div>

      {isLogin ?
      <div className='flex mx-14 px-5 rounded-lg btn rounded-lg bg-white border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF]'>Dang nhap</div>
      :
      <div className='flex flex-row items-center'>
        <AiOutlineBell className='mx-3 w-8 h-8 fill-white'/>
        <AiOutlineShoppingCart className='mx-6 w-8 h-8 fill-white '/>
        <div className='flex flex-row items-center mx-3'>
          <div className="mt-3 flex -space-x-2 overflow-hidden">
            <img className="inline-block h-12 w-12  mx-3 rounded-full ring-2 ring-white" src="{user.avatarUrl}" alt="{user.handle}"/>       
          </div>
          <p className='text-white mx-4 mr-12'>Tuan Trung</p>
        </div>
        
      </div>
      }
    </div>
  )
}

export default Header