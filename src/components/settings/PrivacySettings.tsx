import React from 'react';

const PrivacySettings: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Privacy & Security</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Show my profile to other users</span>
          <div className="relative inline-block w-12 h-6 rounded-full bg-gray-600">
            <input 
              type="checkbox" 
              className="sr-only"
              defaultChecked={true}
            />
            <span className="block w-6 h-6 rounded-full bg-white transform translate-x-6"></span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Allow messages from matches only</span>
          <div className="relative inline-block w-12 h-6 rounded-full bg-gray-600">
            <input 
              type="checkbox" 
              className="sr-only"
              defaultChecked={true}
            />
            <span className="block w-6 h-6 rounded-full bg-white transform translate-x-6"></span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span>Two-factor authentication</span>
          <div className="relative inline-block w-12 h-6 rounded-full bg-gray-600">
            <input 
              type="checkbox" 
              className="sr-only"
              defaultChecked={false}
            />
            <span className="block w-6 h-6 rounded-full bg-white transform translate-x-0"></span>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PrivacySettings;