import React, { FC } from 'react';
import Figma from './Figma';

interface Skill {
  icon: string;
  name: string;
}

interface JobPreviewProps {
  jobTitle: string;
  postedDate: string;
  status: string;
  location: string;
  salaryRange: string;
  skills: Skill[];
  language: string;
  jobType: string;
  experience: string;
  jobDescription: string;
}

const JobPreview: FC<JobPreviewProps> = ({
  jobTitle,
  postedDate,
  status,
  location,
  salaryRange,
  skills,
  language,
  jobType,
  experience,
  jobDescription,
}) => {
  return (
    <div className='border-r-2'>
    <div className=" bg-white pl-20 pt-6">
      <div className="flex justify-between items-center">
        <div className='flex'>
          <h1 className="text-3xl font-semibold">{jobTitle}</h1>
          <span className='text-sm text-gray-300 pt-2 pl-3'>•</span>
          <span className="text-sm text-gray-500 pt-2 pl-2">
            posted {postedDate} <span className="text-customgreen border border-bordercolor bg-custombg rounded-full w-64 justify-center p-1 items-center"> <span className='font-bold bg-dotcolor'>•</span> {status}</span>
          </span>
        </div>
      </div>
      <div className="flex items-center text-gray-600 mt-2">
        <span className="mr-4 flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg> {location}</span>
        <span className='pr-3 text-gray-300'> •</span>
        <span className="mr-4 flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75m-16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg> {salaryRange}</span>
      </div>
      </div>
      <div className="border-b mt-2"></div> 

      <div className="pl-20 bg-white ">
      <div className="flex pt-4">
        <div className="mr-20">
          <h2 className="text-sm text-gray-500">Skills Required</h2>
          <div className="flex mt-2">
            {skills.map((skill, index) => (
              <img key={index} src={skill.icon} alt={skill.name} className="w-6 h-6 mr-2" />
            ))}
            <Figma/>
          </div>
        </div>
        <div className="mx-10">
          <h2 className="text-sm  text-gray-500">Preferred Language</h2>
          <p className="text-sm mt-2 text-gray-800 font-bold">{language}</p>
        </div>
        <div className="ml-16">
          <h2 className="text-sm  text-gray-500">Type</h2>
          <p className="text-sm mt-2 text-gray-800 font-bold">{jobType}</p>
        </div>
        <div className='ml-44'>
          <h2 className="text-sm  text-gray-500">Years of Experience</h2>
          <p className="text-sm mt-2  text-gray-800 font-bold">{experience}</p>
        </div>
      </div>
      </div>
      <div className="border-b mt-4 pt-4"></div> 
      
      <div className="pl-24 bg-white ">
      <div className="mt-4">
        <h2 className="text-sm  text-gray-500">About the job</h2>
        <p
          className="text-sm mt-2 font-semibold text-gray-800 mb-3"
          dangerouslySetInnerHTML={{ __html: jobDescription }}
        />
      </div>
    </div>
    </div>
  );
};

export default JobPreview;
