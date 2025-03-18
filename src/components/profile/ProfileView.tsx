import React from 'react';

interface UserProfile {
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

interface ProfileViewProps {
  userProfile: UserProfile;
}

const ProfileView: React.FC<ProfileViewProps> = ({ userProfile }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      
      {/* Profile Info */}
      <div className="px-6 pb-6">
        {/* Profile Image */}
        <div className="relative -mt-16 mb-4">
          <img 
            src={userProfile.image} 
            alt={userProfile.name} 
            className="w-32 h-32 rounded-full border-4 border-gray-800 object-cover"
          />
        </div>
        
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <h2 className="text-2xl font-bold mr-2">{userProfile.name}</h2>
            <span className="text-xl">{userProfile.age}</span>
          </div>
          <p className="text-blue-300 font-medium">{userProfile.role}</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="text-gray-300">{userProfile.bio}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {userProfile.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-300">{userProfile.location}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-gray-300">{userProfile.experience}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <p className="text-gray-300">{userProfile.education}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <div className="space-y-1">
              <p className="text-blue-400 hover:underline cursor-pointer">
                GitHub: {userProfile.github}
              </p>
              <p className="text-blue-400 hover:underline cursor-pointer">
                Website: {userProfile.website}
              </p>
            </div>
          </div>
        </div>
        
        <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-medium transition-colors">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileView;