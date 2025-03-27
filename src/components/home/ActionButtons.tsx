import React from "react";
import { ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../constants/apiEndpoint.const";
import axios from "axios";
import { removeRequestFromCard } from "../../store/slices/feedSlice";

interface ActionButtonsProps {
  handlePrevious: () => void;
  handleNext: () => void;
  handleSwipe: (user: object) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ handleSwipe }) => {
  const dispatch = useDispatch();

  const { _id } = handleSwipe;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSendRequest = async (status: string, requestId: any) => {
    console.log(`🚀 ~ handleSendRequest ~ requestId:`, requestId);
    try {
      const data = await axios.post(
        `${baseUrl}/connection-request/send/${status}/${requestId}`,
        {},
        { withCredentials: true }
      );
      console.log(`🚀 ~ handleSendRequest ~ data:`, data.data);

      dispatch(removeRequestFromCard(requestId));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        // onClick={handlePrevious}
        className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-gray-300" />
      </button>
      <button
        onClick={() => {
          handleSendRequest("ignore", _id);
        }}
        className="p-4 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
      >
        <X className="h-8 w-8" />
      </button>
      <button
        onClick={() => {
          handleSendRequest("interested", _id);
        }}
        className="p-4 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
      >
        <Heart className="h-8 w-8" />
      </button>
      <button
        // onClick={handleNext}
        className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-gray-300" />
      </button>
    </div>
  );
};

export default ActionButtons;
