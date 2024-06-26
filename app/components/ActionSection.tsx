import React from 'react';

const ActionSection = () => {
  return (
    <div className="p-6 bg-white  ">
      <div className="flex justify-center space-x-4 mb-6">
        <button className="px-4 py-2 bg-red-500 text-white rounded">Delete job</button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded">Edit job</button>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between text-gray-800">
          <span>Applicants</span>
          <span className='font-bold'>400</span>
        </div>
        <div className="flex justify-between text-gray-800">
          <span>Matches</span>
          <span className='font-bold'>100</span>
        </div>
        <div className="flex justify-between text-gray-800">
          <span>Messages</span>
          <span className='font-bold'>147</span>
        </div>
        <div className="flex justify-between text-gray-800">
          <span>Views</span>
          <span className='font-bold'>800</span>
        </div>
      </div>
    </div>
  );
};

export default ActionSection;
