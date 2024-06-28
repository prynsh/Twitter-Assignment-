import React from 'react';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import { UserDeleteOutlined } from '@ant-design/icons';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';


const ActionSection = () => {
  return (
    <div className="p-6 bg-white  ">
      <div className="flex justify-center space-x-4 mb-6">
        <button className="flex px-5 py-2  mx-4  bg-white text-customorange border-2 border-customorange rounded"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
        Delete job</button>
        <button className="flex px-5 py-2 mx-4 bg-customorange text-white rounded"><CreateOutlinedIcon/>Edit job</button>
      </div>
      <div className="flex flex-col space-y-4 pl-8 pr-5 ">
        <div className="flex justify-between  text-gray-800 border-b-2 py-3">
          <span ><PeopleOutlinedIcon/>Applicants</span>
          <span className='font-bold'>400</span>
        </div>
        <div className="flex justify-between text-gray-800 border-b-2 py-2">
            
          <span className='flex pr-2'><UserDeleteOutlined/>Matches</span>
          <span className='font-bold'>100</span>
        </div>
        <div className="flex justify-between text-gray-800 border-b-2 py-2">
          <span><ChatBubbleOutlineOutlinedIcon/>Messages</span>
          <span className='font-bold'>147</span>
        </div>
        <div className="flex justify-between text-gray-800 border-b-2 py-2">
          <span><VisibilityOutlinedIcon/>Views</span>
          <span className='font-bold'>800</span>
        </div>
      </div>
    </div>
  );
};

export default ActionSection;
