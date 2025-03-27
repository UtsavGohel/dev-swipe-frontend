import React from "react";
import ConnectionsList from "./ConnectionsList";
import FriendRequests from "./FriendRequests";

const ConnectionsView: React.FC = () => {
  return (
    <div>
      <ConnectionsList />
      <FriendRequests />
    </div>
  );
};

export default ConnectionsView;
