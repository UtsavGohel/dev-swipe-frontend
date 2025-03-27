import React, { useEffect } from "react";
import { Check, X, Users } from "lucide-react";

import axios from "axios";
import { baseUrl } from "../../constants/apiEndpoint.const";
import { useDispatch, useSelector } from "react-redux";
import {
  removeRequestFromCard,
  setRequestConnectionData,
} from "../../store/slices/requestSlice";

const FriendRequests = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlConenctioneRequest = async (status: string, requestId: any) => {
    const response = await axios.post(
      `${baseUrl}/connection-request/review/${status}/${requestId}`,
      {},
      { withCredentials: true }
    );

    if (response.status === 201) {
      dispatch(removeRequestFromCard(requestId));
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getRequestData = useSelector((store: any) => store?.request);

  const dispatch = useDispatch();

  const getConnectionsList = async () => {
    const getRequest = await axios.post(
      `${baseUrl}/connection-request/recieved-connection-request`,
      {},
      { withCredentials: true }
    );

    if (getRequest.data.data !== "No data found") {
      dispatch(setRequestConnectionData(getRequest.data.data));
    }
  };

  useEffect(() => {
    getConnectionsList();
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mt-6">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Connection Requests</h2>
      </div>
      <div className="divide-y divide-gray-700">
        {getRequestData?.length === 0 || !getRequestData ? (
          <div className="p-8 text-center text-gray-400">
            <p>No pending connection requests</p>
          </div>
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          getRequestData?.map((request: any) => {
            const { firstName, lastName, userImage } = request.fromUserId;
            return (
              <>
                <div key={request._id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <img
                        src={userImage}
                        alt="img"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-medium">
                          {firstName + " " + lastName}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {request.designation}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Users className="h-3 w-3 mr-1" />
                          {request.mutualConnections} mutual connection
                          {request.mutualConnections !== 1 && "s"}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          handlConenctioneRequest("rejected", request._id);
                        }}
                        className="p-2 hover:bg-gray-700 rounded-full transition-colors text-gray-400 hover:text-red-400"
                      >
                        <X className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => {
                          handlConenctioneRequest("accepted", request._id);
                        }}
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
              </>
            );
          })
        )}
      </div>

      {}
    </div>
  );
};

export default FriendRequests;
