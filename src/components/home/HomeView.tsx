import React from "react";
import SwipeCard from "./SwipeCard";
import ActionButtons from "./ActionButtons";
// import StatsDisplay from './StatsDisplay';

interface DeveloperProfile {
  id: number;
  name: string;
  age: number;
  role: string;
  bio: string;
  skills: string[];
  image: string;
}

interface HomeViewProps {
  currentProfile: DeveloperProfile;
  handlePrevious: () => void;
  handleNext: () => void;
  handleSwipe: (liked: boolean) => void;
  swipedProfiles: number[];
  likedProfiles: number[];
}

const HomeView: React.FC<HomeViewProps> = ({
  currentProfile,
  handlePrevious,
  handleNext,
  handleSwipe,
  // swipedProfiles,
  // likedProfiles
}) => {
  return (
    <>
      <SwipeCard profile={currentProfile} />
      <ActionButtons
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleSwipe={handleSwipe}
      />
      {/* <StatsDisplay 
        swipedCount={swipedProfiles.length}
        likedCount={likedProfiles.length}
      /> */}
    </>
  );
};

export default HomeView;
