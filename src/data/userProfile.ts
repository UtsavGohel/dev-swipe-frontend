export interface UserProfile {
  name: string;
  age: number;
  role: string;
  bio: string;
  skills: string[];
  location: string;
  github: string;
  website: string;
  image: string;
  experience: string;
  education: string;
}

// User profile data
export const userProfile: UserProfile = {
  name: 'Jamie Smith',
  age: 27,
  role: 'Frontend Developer',
  bio: 'Passionate about creating beautiful and intuitive user interfaces. Looking for collaboration opportunities.',
  skills: ['JavaScript', 'React', 'Tailwind CSS', 'UI/UX'],
  location: 'San Francisco, CA',
  github: 'github.com/jamiesmith',
  website: 'jamiesmith.dev',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  experience: '4 years',
  education: 'B.S. Computer Science, Stanford University'
};