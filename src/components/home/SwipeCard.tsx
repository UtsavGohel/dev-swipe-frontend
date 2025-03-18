import React from 'react';

interface DeveloperProfile {
  id: number;
  name: string;
  age: number;
  role: string;
  bio: string;
  skills: string[];
  image: string;
}

interface SwipeCardProps {
  profile: DeveloperProfile;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ profile }) => {
  return (
    <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl mb-6 h-[500px]">
      <img 
        src={profile.image} 
        alt={profile.name} 
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      
      {/* Profile Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-2">{profile.name}</h2>
          <span className="text-xl">{profile.age}</span>
        </div>
        <p className="text-blue-300 font-medium mb-2">{profile.role}</p>
        <p className="text-gray-300 mb-3">{profile.bio}</p>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-2">
          {profile.skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-700/80 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwipeCard;