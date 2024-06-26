'use client'
import { useState } from 'react';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState<string>('Job preview');

  const tabs: string[] = ['Job preview', 'Applicants', 'Match', 'Messages'];

  return (
    <div>
      <div className="flex border-b border-gray-200 ml-48">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 ">
        {activeTab === 'Job preview' && <div>Job preview content goes here.</div>}
        {activeTab === 'Applicants' && <div>Applicants content goes here.</div>}
        {activeTab === 'Match' && <div>Match content goes here.</div>}
        {activeTab === 'Messages' && <div>Messages content goes here.</div>}
      </div>
    </div>
  );
};

export default TabMenu;
