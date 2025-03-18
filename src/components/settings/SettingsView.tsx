import React, { useState } from 'react';
import SettingsSidebar from './SettingsSidebar';
import AccountSettings from './AccountSettings';
import PrivacySettings from './PrivacySettings';
import NotificationSettings from './NotificationSettings';

interface SettingsOption {
  id: string;
  label: string;
}

interface SettingsViewProps {
  settingsOptions: SettingsOption[];
}

const SettingsView: React.FC<SettingsViewProps> = ({ settingsOptions }) => {
  const [activeSettingsTab, setActiveSettingsTab] = useState('account');

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="flex border-b border-gray-700">
        {/* Settings Sidebar */}
        <SettingsSidebar 
          options={settingsOptions}
          activeTab={activeSettingsTab}
          setActiveTab={setActiveSettingsTab}
        />
        
        {/* Settings Content */}
        <div className="w-2/3 p-4">
          {activeSettingsTab === 'account' && <AccountSettings />}
          {activeSettingsTab === 'privacy' && <PrivacySettings />}
          {activeSettingsTab === 'notifications' && <NotificationSettings />}
          
          {activeSettingsTab !== 'account' && 
           activeSettingsTab !== 'privacy' && 
           activeSettingsTab !== 'notifications' && (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-400">
                {settingsOptions.find(opt => opt.id === activeSettingsTab)?.label} settings coming soon
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsView;