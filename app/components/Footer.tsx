import React from 'react';

const CompanyFooter = () => {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-md mt-6">
      <div className="flex items-center space-x-4 mb-4">
        <img src="path/to/company-logo.png" alt="Company Logo" className="w-12 h-12" />
        <div>
          <h2 className="text-xl font-semibold">Atlassian</h2>
          <p className="text-sm text-gray-500">Company size: 1k - 2k Employees</p>
        </div>
      </div>
      <div className="flex flex-wrap space-x-8">
        <div>
          <h3 className="text-sm font-medium text-gray-600">Type</h3>
          <p className="text-sm text-gray-800">Private</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-600">Sector</h3>
          <p className="text-sm text-gray-800">Information Technology, Infrastructure</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-600">Funding</h3>
          <p className="text-sm text-gray-800">Bootstrapped</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-600">Founded In</h3>
          <p className="text-sm text-gray-800">2019</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-600">Founded By</h3>
          <p className="text-sm text-gray-800">Scott Farquhar, Mike Cannon-Brookes</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyFooter;
