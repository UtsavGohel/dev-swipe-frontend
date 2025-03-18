import React from 'react';

interface StatsDisplayProps {
  swipedCount: number;
  likedCount: number;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ swipedCount, likedCount }) => {
  return (
    <div className="mt-8 bg-gray-800/50 rounded-lg p-4">
      <h3 className="text-lg font-medium mb-2">Your Stats</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700/50 p-3 rounded-lg">
          <p className="text-sm text-gray-400">Profiles Viewed</p>
          <p className="text-2xl font-bold">{swipedCount}</p>
        </div>
        <div className="bg-gray-700/50 p-3 rounded-lg">
          <p className="text-sm text-gray-400">Matches</p>
          <p className="text-2xl font-bold">{likedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;