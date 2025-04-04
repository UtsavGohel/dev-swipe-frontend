import React, { useEffect, useState } from "react";
import SwipeCard from "./home/SwipeCard";
import ActionButtons from "./home/ActionButtons";
import { baseUrl } from "../constants/apiEndpoint.const";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/slices/feedSlice";
import { FaRedoAlt } from "react-icons/fa";
// import StatsDisplay from './home/StatsDisplay';

// interface DeveloperProfile {
//   id: number;
//   name: string;
//   age: number;
//   role: string;
//   bio: string;
//   skills: string[];
//   image: string;
// }

interface FeedProps {
  // currentProfile: DeveloperProfile;
  handlePrevious: () => void;
  handleNext: () => void;
  handleSwipe: (liked: boolean) => void;
  swipedProfiles: number[];
  likedProfiles: number[];
}

const Feed: React.FC<FeedProps> = ({
  // currentProfile,
  handlePrevious,
  handleNext,
  // swipedProfiles,
  // likedProfiles
}) => {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const feeds = useSelector((store: any) => store.feed);
  const dispatch = useDispatch();

  // Fetch Feed API function
  const getUserFeed = async () => {
    try {
      setLoading(true); // Start loading
      const feedDetail = await axios.post(
        `${baseUrl}/connection-request/user/feed`,
        {
          start: 0,
          limit: 50,
        },
        { withCredentials: true }
      );

      if (feedDetail.data.data) {
        dispatch(addFeed(feedDetail.data.data));
      }
      setLoading(false); // Stop loading when done
    } catch (error) {
      setLoading(false); // Stop loading on error
      console.error("Error fetching feed:", error);
      alert("Failed to fetch the feed. Please try again.");
    }
  };

  // Initial feed fetch when the component mounts
  useEffect(() => {
    getUserFeed();
  }, []);

  // Retry function for fetching the feed again
  const handleRetry = () => {
    setLoading(true); // Start loading
    getUserFeed(); // Trigger the API call to fetch the feed
  };

  return (
    <div className="max-w-md mx-auto mt-3">
      {feeds && feeds.length > 0 ? (
        <div>
          <SwipeCard profile={feeds[0]} />
          <ActionButtons
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            handleSwipe={feeds?.[0]}
          />
        </div>
      ) : (
        // <p className="text-2xl font-bold">No Feed Found</p>
        // <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl mb-6 h-[500px] flex items-center justify-center">
        //   {/* Placeholder Image */}
        //   <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
        //     <p className="text-2xl font-bold">No Feed Available</p>
        //   </div>
        // </div>

        <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl mb-6 h-[500px] flex flex-col items-center justify-center text-white">
          {/* Background Image or Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>

          {/* Icon for No Feed */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <FaRedoAlt className="text-white text-3xl animate-spin" />
            </div>
            <p className="text-2xl font-bold mb-2">No Feed Available</p>
            <p className="text-sm mb-4">
              It seems like we couldn’t fetch any feeds at the moment.
            </p>

            {/* Loading Spinner or Retry Button */}
            {loading ? (
              <div className="text-lg text-white">Loading...</div>
            ) : (
              <button
                onClick={handleRetry}
                className="bg-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Retry Feed
              </button>
            )}
          </div>
        </div>
      )}

      {/* <StatsDisplay 
        swipedCount={swipedProfiles.length}
        likedCount={likedProfiles.length}
      /> */}
    </div>
  );
};

export default Feed;
