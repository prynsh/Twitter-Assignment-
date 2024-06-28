import React from 'react';
import atlas from "../assets/atlas.png";
import Image from 'next/image';

const CompanyFooter = () => {
  return (
    <div className="p-5 pt-1 bg-white shadow-md mt-5 pl-28">
      <div className="flex items-center space-x-2 mb-1">
        <Image src={atlas} alt="Company Logo" className="w-10 h-8" />
        <div>
          <h2 className="text-normal ">Atlassian</h2>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex w-full  mt-2 mb-4">
          <div className="w-96">
            <h3 className="text-sm text-gray-500">Company size</h3>
            <p className="text-sm text-gray-800 font-semibold">1k - 2k Employees</p>
          </div>
          <div className="w-96">
            <h3 className="text-sm text-gray-500">Type</h3>
            <p className="text-sm text-gray-800 font-semibold">Private</p>
          </div>
        </div>
        <div className="flex w-full mb-2">
          <div className="w-96">
            <h3 className="text-sm text-gray-500">Sector</h3>
            <p className="text-sm text-gray-800 font-semibold">Information Technology, Infrastructure</p>
          </div>
          <div className="w-96">
            <h3 className="text-sm text-gray-500">Funding</h3>
            <p className="text-sm text-gray-800 font-semibold">Bootstrapped</p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-96">
            <h3 className="text-sm text-gray-500">Founded In</h3>
            <p className="text-sm text-gray-800 font-semibold">2019</p>
          </div>
          <div className="w-96">
            <h3 className="text-sm text-gray-500">Founded By</h3>
            <p className="text-sm text-gray-800 font-semibold">Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFooter;
