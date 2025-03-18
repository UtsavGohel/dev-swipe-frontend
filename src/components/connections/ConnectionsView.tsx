import React from "react";
import ConnectionsList from "./ConnectionsList";
import FriendRequests from "./FriendRequests";
import { connections, friendRequests } from "../../data/connections";

const ConnectionsView: React.FC = () => {
  return (
    <div>
      <ConnectionsList connections={connections} />
      <FriendRequests requests={friendRequests} />
    </div>
  );
};

export default ConnectionsView;
