export interface Connection {
  id: number;
  userId: number;
  name: string;
  role: string;
  image: string;
  lastActive: string;
  status: 'online' | 'offline';
}

export interface FriendRequest {
  id: number;
  userId: number;
  name: string;
  role: string;
  image: string;
  requestDate: string;
  mutualConnections: number;
}

// Sample connections data
export const connections: Connection[] = [
  {
    id: 1,
    userId: 2,
    name: 'Sophia Chen',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    lastActive: '2 hours ago',
    status: 'online'
  },
  {
    id: 2,
    userId: 3,
    name: 'Marcus Williams',
    role: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    lastActive: '3 days ago',
    status: 'offline'
  }
];

// Sample friend requests data
export const friendRequests: FriendRequest[] = [
  {
    id: 1,
    userId: 4,
    name: 'Emma Rodriguez',
    role: 'UI/UX Designer & Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    requestDate: '2 days ago',
    mutualConnections: 3
  },
  {
    id: 2,
    userId: 5,
    name: 'David Kim',
    role: 'DevOps Engineer',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    requestDate: '1 week ago',
    mutualConnections: 1
  }
];