import React from 'react';
import SwipeCard from './home/SwipeCard';
import ActionButtons from './home/ActionButtons';
import StatsDisplay from './home/StatsDisplay';

interface DeveloperProfile {
  id: number;
  name: string;
  age: number;
  role: string;
  bio: string;
  skills: string[];
  image: string;
}

interface FeedProps {
  currentProfile: DeveloperProfile;
  handlePrevious: () => void;
  handleNext: () => void;
  handleSwipe: (liked: boolean) => void;
  swipedProfiles: number[];
  likedProfiles: number[];
}

const Feed: React.FC<FeedProps> = ({
  currentProfile,
  handlePrevious,
  handleNext,
  handleSwipe,
  swipedProfiles,
  likedProfiles
}) => {
  return (
    <div className="max-w-md mx-auto">
      <SwipeCard profile={currentProfile} />
      <ActionButtons 
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleSwipe={handleSwipe}
      />
      <StatsDisplay 
        swipedCount={swipedProfiles.length}
        likedCount={likedProfiles.length}
      />
    </div>
  );
};

export default Feed;