import React from "react";

interface DeveloperProfile {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  designation: string;
  bio: string;
  skills: string[];
  userImage: string;
}

interface SwipeCardProps {
  profile: DeveloperProfile;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ profile }) => {
  return (
    <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl mb-6 h-[500px]">
      <img
        src={
          profile?.userImage ||
          "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
        }
        alt="image"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent mt-3"></div>

      {/* Profile Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-2">
            {profile?.firstName + " " + profile?.lastName}
          </h2>
          <span className="text-xl">{profile?.age}</span>
        </div>
        <p className="text-blue-300 font-medium mb-2">
          {profile?.designation || "No designation Added"}
        </p>
        <p className="text-gray-300 mb-3">{profile?.bio || "No bio added"}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-2">
          {profile?.skills?.split(",").map((skill, index) => (
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
