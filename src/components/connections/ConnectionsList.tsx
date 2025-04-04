import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../constants/apiEndpoint.const";
import { addUserConnection } from "../../store/slices/connectionSlice";

const ConnectionsList = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const connectionsData = useSelector((store: any) => store?.connection);

  const getConnections = async () => {
    const connectionData = await axios.post(
      `${baseUrl}/connection-request/connection-list`,
      {},
      { withCredentials: true }
    );

    dispatch(addUserConnection(connectionData.data.data));
  };

  useEffect(() => {
    getConnections();
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Your Connections</h2>
      </div>

      <div className="divide-y divide-gray-700">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          connectionsData?.map((connection: any) => (
            <div
              key={connection._id}
              className="p-4 hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <div className="relative">
                    <img
                      src={
                        connection.userImage ||
                        "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                      }
                      alt={"user name"}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${
                        connection.status === "online"
                          ? "bg-green-500"
                          : "bg-gray-500"
                      }`}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">
                      {connection.firstName + " " + connection.lastName}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {connection.designation || "Senior Software Developer"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Last active {connection.lastActive}
                    </p>
                  </div>
                </div>
                {/* chat with user button > disabled for now */}
                <button
                  disabled
                  onClick={() => navigate(`/messages/${connection.userId}`)}
                  className="p-2 hover:bg-gray-600 rounded-full transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))
        }
      </div>

      {connectionsData && connectionsData?.length === 0 && (
        <div className="p-8 text-center text-gray-400">
          <p>No connections yet. Start swiping to connect with developers!</p>
        </div>
      )}
    </div>
  );
};

export default ConnectionsList;
