"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Atllasianlogo from "../assets/Atllasian.png"
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';


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
    <div className='flex justify-around items-center p-4'>
      <div>
        <Link href="/home" className='border-4 bg-logobg text-customorange text-2xl size-20 p-2'>
          Logo
        </Link>
      </div>
      <div className='flex justify-between items-center mx-2 w-1/3 border-2 rounded-full'>
        <div className='bg-customorange rounded-full m-2'>
        <button  className= ' w-24 p-2 px-1 justify-center rounded-full flex text-white'><svg width="24" height="22" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 21.5V7.5C8 6.57003 8 6.10504 8.10222 5.72354C8.37962 4.68827 9.18827 3.87962 10.2235 3.60222C10.605 3.5 11.07 3.5 12 3.5C12.93 3.5 13.395 3.5 13.7765 
        3.60222C14.8117 3.87962 15.6204 4.68827 15.8978 5.72354C16 6.10504 16 6.57003 16 7.5V21.5M5.2 21.5H18.8C19.9201 21.5 20.4802 21.5 20.908 21.282C21.2843 21.0903 
        21.5903 20.7843 21.782 20.408C22 19.9802 22 19.4201 22 18.3V10.7C22 9.57989 22 9.01984 21.782 8.59202C21.5903 8.21569 21.2843 7.90973 20.908 7.71799C20.4802 7.5 
        19.9201 7.5 18.8 7.5H5.2C4.07989 7.5 3.51984 7.5 3.09202 7.71799C2.71569 7.90973 2.40973 8.21569 2.21799 8.59202C2 9.01984 2 9.57989 2 10.7V18.3C2 19.4201 2 19.9802 
        2.21799 20.408C2.40973 20.7843 2.71569 21.0903 3.09202 21.282C3.51984 21.5 4.0799 21.5 5.2 21.5Z" stroke="white" stroke-width="2" stroke-linecap="round" 
        stroke-linejoin="round"/></svg> Jobs</button>
        
        </div>
        <div className='flex'>
            <div className='px-2'>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V13.7C21 15.3802 21 16.2202 20.673 16.862C20.3854 17.4265 19.9265 17.8854 19.362 18.173C18.7202 18.5 17.8802 18.5 16.2 18.5H9.68375C9.0597 18.5 8.74767 18.5 8.44921 18.5613C8.18443 18.6156 7.9282 18.7055 7.68749 18.8285C7.41617 18.9671 7.17252 19.162 6.68521 19.5518L4.29976 21.4602C3.88367 21.7931 3.67563 21.9595 3.50054 21.9597C3.34827 21.9599 3.20422 21.8906 3.10923 21.7716C3 21.6348 3 21.3684 3 20.8355V8.3Z" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            Messages
        </div>
        <div className='mx-3'>
            Payments
        </div>
      </div >
      <div className='flex mx-2'>
            <div>
            <Link href={'/notifications'}></Link>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6667 28H13.3333M24 10.6667C24 8.54496 23.1572 6.51012 21.6569 5.00983C20.1566 3.50954 18.1217 2.66669 16 2.66669C13.8783 2.66669 11.8434 3.50954 10.3432 5.00983C8.84286 6.51012 8 8.54496 8 10.6667C8 14.7869 6.96063 17.608 5.79956 19.4739C4.82017 21.0479 4.33048 21.8348 4.34844 22.0544C4.36832 22.2975 4.41982 22.3902 4.61571 22.5355C4.79262 22.6667 5.59013 22.6667 7.18514 22.6667H24.8149C26.4099 22.6667 27.2074 22.6667 27.3843 22.5355C27.5802 22.3902 27.6317 22.2975 27.6516 22.0544C27.6695 21.8348 27.1798 21.0479 26.2005 19.4739C25.0394 17.608 24 14.7869 24 10.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <div> 
                <Image className='mx-2' src={Atllasianlogo} alt='Atllasian' width={32} height={32}></Image>
            </div>
            
            <Dropdown className=' ' menu={{ items }} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                        
                            <DownOutlined  height={10}/>
                        
                        </a>
                    </Dropdown>
            
      </div>
    </div>
  );
};

export default Header;
