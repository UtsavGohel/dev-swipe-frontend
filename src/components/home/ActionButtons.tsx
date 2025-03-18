import React from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ActionButtonsProps {
  handlePrevious: () => void;
  handleNext: () => void;
  handleSwipe: (liked: boolean) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  handlePrevious, 
  handleNext, 
  handleSwipe 
}) => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <button 
        onClick={handlePrevious}
        className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-gray-300" />
      </button>
      <button 
        onClick={() => handleSwipe(false)}
        className="p-4 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
      >
        <X className="h-8 w-8" />
      </button>
      <button 
        onClick={() => handleSwipe(true)}
        className="p-4 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
      >
        <Heart className="h-8 w-8" />
      </button>
      <button 
        onClick={handleNext}
        className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-gray-300" />
      </button>
    </div>
  );
};

export default ActionButtons;