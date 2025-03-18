import React from 'react';

const AccountSettings: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            defaultValue="jamie@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
          <input 
            type="password" 
            className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            defaultValue="••••••••"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
          <input 
            type="tel" 
            className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            defaultValue="+1 (555) 123-4567"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;