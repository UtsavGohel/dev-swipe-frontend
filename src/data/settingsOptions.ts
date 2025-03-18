export interface SettingsOption {
  id: string;
  label: string;
}

// Settings options
export const settingsOptions: SettingsOption[] = [
  { id: 'account', label: 'Account Settings' },
  { id: 'privacy', label: 'Privacy & Security' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'appearance', label: 'Appearance' },
  { id: 'language', label: 'Language' },
  { id: 'help', label: 'Help & Support' }
];