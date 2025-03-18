import React from 'react';

interface SettingsOption {
  id: string;
  label: string;
}

interface SettingsSidebarProps {
  options: SettingsOption[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ 
  options, 
  activeTab, 
  setActiveTab 
}) => {
  return (
    <div className="w-1/3 border-r border-gray-700">
      {options.map(option => (
        <button
          key={option.id}
          className={`w-full text-left px-4 py-3 transition-colors ${
            activeTab === option.id 
              ? 'bg-gray-700 border-l-4 border-blue-500' 
              : 'hover:bg-gray-700/50'
          }`}
          onClick={() => setActiveTab(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SettingsSidebar;