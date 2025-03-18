import React, { useState } from "react";
import { Check, X, Users } from "lucide-react";
import { FriendRequest } from "../../data/connections";

interface FriendRequestsProps {
  requests: FriendRequest[];
}

const FriendRequests: React.FC<FriendRequestsProps> = ({
  requests: initialRequests,
}) => {
  const [requests, setRequests] = useState(initialRequests);

  const handleAccept = (requestId: number) => {
    // In a real app, you would make an API call here
    setRequests(requests.filter((request) => request.id !== requestId));
    // Show success message or update connections list
  };

  const handleReject = (requestId: number) => {
    // In a real app, you would make an API call here
    setRequests(requests.filter((request) => request.id !== requestId));
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mt-6">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Connection Requests</h2>
      </div>
      <div className="divide-y divide-gray-700">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          requests.map((request: any) => (
            <div key={request.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <img
                    src={request.image}
                    alt={request.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium">{request.name}</h3>
                    <p className="text-sm text-gray-400">{request.role}</p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Users className="h-3 w-3 mr-1" />
                      {request.mutualConnections} mutual connection
                      {request.mutualConnections !== 1 && "s"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleReject(request.id)}
                    className="p-2 hover:bg-gray-700 rounded-full transition-colors text-gray-400 hover:text-red-400"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleAccept(request.id)}
                    className="p-2 hover:bg-gray-700 rounded-full transition-colors text-gray-400 hover:text-green-400"
                  >
                    <Check className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Requested {request.requestDate}
              </p>
            </div>
          ))
        }
      </div>

      {requests.length === 0 && (
        <div className="p-8 text-center text-gray-400">
          <p>No pending connection requests</p>
        </div>
      )}
    </div>
  );
};

export default FriendRequests;
