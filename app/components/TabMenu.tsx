'use client'
import { useState } from 'react';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState<string>('Job preview');

  const tabs: string[] = ['Job preview', 'Applicants', 'Match', 'Messages'];

  return (
    <div >
      <div className="flex border-b border-gray-200 pl-20">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-12 py-2 text-md font-normal ${
              activeTab === tab
                ? 'text-red-600 after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:w-8 after:h-[2px] after:bg-red-600 after:transform after:-translate-x-1/2'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="">
        {activeTab === 'Job preview' && <div></div>}
        {activeTab === 'Applicants' && <div>Applicants content goes here.</div>}
        {activeTab === 'Match' && <div>Match content goes here.</div>}
        {activeTab === 'Messages' && <div>Messages content goes here.</div>}
      </div>
    </div>
  );
};

export default TabMenu;
