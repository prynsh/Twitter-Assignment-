import React from 'react';

const JobPreview = () => {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Senior Product Designer</h1>
        <span className="text-sm text-gray-500">posted 2 days ago • <span className="text-green-600">Open</span></span>
      </div>
      <div className="flex items-center text-gray-500 mt-2">
        <span className="mr-4">📍 Delaware, USA</span>
        <span className="mr-4">💵 $300k-$400k</span>
      </div>
      <div className="flex mt-4 border-t pt-4">
        <div className="mr-8">
          <h2 className="text-sm font-medium text-gray-600">Skills Required</h2>
          <div className="flex mt-1">
            <img src="path/to/figma-icon.png" alt="Figma" className="w-6 h-6 mr-2" />
            <img src="path/to/illustrator-icon.png" alt="Adobe Illustrator" className="w-6 h-6 mr-2" />
            <img src="path/to/xd-icon.png" alt="Adobe XD" className="w-6 h-6" />
          </div>
        </div>
        <div className="mr-8">
          <h2 className="text-sm font-medium text-gray-600">Preferred Language</h2>
          <p className="text-sm text-gray-800">English</p>
        </div>
        <div className="mr-8">
          <h2 className="text-sm font-medium text-gray-600">Type</h2>
          <p className="text-sm text-gray-800">Full time</p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-600">Years of Experience</h2>
          <p className="text-sm text-gray-800">3+ Years of Experience</p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-sm font-medium text-gray-600">About the job</h2>
        <p className="text-sm text-gray-800 mt-1">
          1. Handle the UI/UX research design<br />
          2. Work on researching on latest web applications designs & trends<br />
          3. Work on conceptualizing and visualizing<br />
          4. Work on creating graphics content and other graphic related works<br />
          Benefits:<br />
          • Health insurance<br />
          • Provident Fund<br />
          Schedule:<br />
          • Day shift<br />
          Supplemental pay types:<br />
          • Performance bonus<br />
          • Yearly bonus<br />
          Work Location: In person
        </p>
      </div>
    </div>
  );
};

export default JobPreview;
