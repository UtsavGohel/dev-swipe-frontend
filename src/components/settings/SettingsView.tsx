import React, { useState } from "react";
import SettingsSidebar from "./SettingsSidebar";
import AccountSettings from "./AccountSettings";
import PrivacySettings from "./PrivacySettings";
import NotificationSettings from "./NotificationSettings";

interface SettingsOption {
  id: string;
  label: string;
}

interface SettingsViewProps {
  settingsOptions: SettingsOption[];
}

const SettingsView: React.FC<SettingsViewProps> = ({ settingsOptions }) => {
  const [activeSettingsTab, setActiveSettingsTab] = useState("account");

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mt-3">
      <div className="mt-6 mx-4 p-4 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md text-black text-center border-l-4 border-yellow-800">
        <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
          🚧 Under Development
        </h3>
        <p className="mt-2 text-sm font-medium">
          This chat feature is not functional yet. Stay tuned for updates! 🚀
        </p>
      </div>
      <div className="flex border-b border-gray-700 mt-3">
        {/* Settings Sidebar */}
        <SettingsSidebar
          options={settingsOptions}
          activeTab={activeSettingsTab}
          setActiveTab={setActiveSettingsTab}
        />

        {/* Settings Content */}
        <div className="w-2/3 p-4">
          {activeSettingsTab === "account" && <AccountSettings />}
          {activeSettingsTab === "privacy" && <PrivacySettings />}
          {activeSettingsTab === "notifications" && <NotificationSettings />}

          {activeSettingsTab !== "account" &&
            activeSettingsTab !== "privacy" &&
            activeSettingsTab !== "notifications" && (
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-400">
                  {
                    settingsOptions.find((opt) => opt.id === activeSettingsTab)
                      ?.label
                  }{" "}
                  settings coming soon
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
