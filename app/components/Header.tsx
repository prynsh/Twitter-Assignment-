"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Atllasianlogo from "../assets/Atllasian.png"
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';


const Header = () => {
    const items: MenuProps['items'] = [
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ];
  return (
    <div className='flex space-x-72  pl-12 items-center p-4'>
      <div className='h-10 w-56' >
        <Link href="/home" className='  border-2  bg-logobg text-customorange font-semibold text-2xl  p-2'>
          Logo
        </Link>
      </div>
      <div className='flex space-x-28 items-center  w-1/3 border-2 rounded-full'>
        <div className='bg-customorange rounded-full m-1  ml-3 '>
        <button  className= ' w-24 p-2  justify-center rounded-full flex text-white'><svg width="20" height="19" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 21.5V7.5C8 6.57003 8 6.10504 8.10222 5.72354C8.37962 4.68827 9.18827 3.87962 10.2235 3.60222C10.605 3.5 11.07 3.5 12 3.5C12.93 3.5 13.395 3.5 13.7765 
        3.60222C14.8117 3.87962 15.6204 4.68827 15.8978 5.72354C16 6.10504 16 6.57003 16 7.5V21.5M5.2 21.5H18.8C19.9201 21.5 20.4802 21.5 20.908 21.282C21.2843 21.0903 
        21.5903 20.7843 21.782 20.408C22 19.9802 22 19.4201 22 18.3V10.7C22 9.57989 22 9.01984 21.782 8.59202C21.5903 8.21569 21.2843 7.90973 20.908 7.71799C20.4802 7.5 
        19.9201 7.5 18.8 7.5H5.2C4.07989 7.5 3.51984 7.5 3.09202 7.71799C2.71569 7.90973 2.40973 8.21569 2.21799 8.59202C2 9.01984 2 9.57989 2 10.7V18.3C2 19.4201 2 19.9802 
        2.21799 20.408C2.40973 20.7843 2.71569 21.0903 3.09202 21.282C3.51984 21.5 4.0799 21.5 5.2 21.5Z" stroke="white" stroke-width="2" stroke-linecap="round" 
        stroke-linejoin="round"/></svg> <span className=''>Jobs</span></button>
        
        </div>
        <div className='flex'>
            <div className='px-1 text-gray-400 '>
            <MarkChatUnreadOutlinedIcon/>
            </div>
           <span className='text-lg text-gray-400'>Messages</span> 
        </div>
        <div className='text-lg text-gray-400'>
            Payments
        </div>
      </div >
      <div className='flex pl-48'>
            <div>
            <Link href={'/notifications'}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6667 28H13.3333M24 10.6667C24 8.54496 23.1572 6.51012 21.6569 5.00983C20.1566 3.50954 18.1217 2.66669 16 2.66669C13.8783 2.66669 11.8434 3.50954 10.3432 5.00983C8.84286 6.51012 8 8.54496 8 10.6667C8 14.7869 6.96063 17.608 5.79956 19.4739C4.82017 21.0479 4.33048 21.8348 4.34844 22.0544C4.36832 22.2975 4.41982 22.3902 4.61571 22.5355C4.79262 22.6667 5.59013 22.6667 7.18514 22.6667H24.8149C26.4099 22.6667 27.2074 22.6667 27.3843 22.5355C27.5802 22.3902 27.6317 22.2975 27.6516 22.0544C27.6695 21.8348 27.1798 21.0479 26.2005 19.4739C25.0394 17.608 24 14.7869 24 10.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></Link>
            </div>
            <div> 
                <Image className='mx-1' src={Atllasianlogo} alt='Atllasian' width={28} height={28}></Image>
            </div>
            <Dropdown className='' menu={{ items }} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <DownOutlined className='pl-1' height={10}/>
                        </a></Dropdown>            
      </div>
    </div>
  );
};

export default Header;

