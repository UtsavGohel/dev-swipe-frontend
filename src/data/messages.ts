export interface Message {
  id: number;
  text: string;
  timestamp: string;
  isUser: boolean;
}

export interface ChatInfo {
  id: number;
  senderId: number;
  senderName: string;
  senderImage: string;
  messages: Message[];
}

// Sample messages
export const sampleMessages: ChatInfo[] = [
  {
    id: 1,
    senderId: 2,
    senderName: 'Sophia Chen',
    senderImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    messages: [
      { id: 1, text: "Hey! I saw you're interested in React. I'm working on a project that might interest you.", timestamp: "2 hours ago", isUser: false },
      { id: 2, text: "That sounds interesting! What kind of project is it?", timestamp: "1 hour ago", isUser: true },
      { id: 3, text: "It's a collaborative coding platform for remote teams. Would you like to join?", timestamp: "45 minutes ago", isUser: false },
    ]
  },
  {
    id: 2,
    senderId: 3,
    senderName: 'Marcus Williams',
    senderImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    messages: [
      { id: 1, text: "Hi there! I noticed you have experience with TypeScript. I could use some help with a project.", timestamp: "1 day ago", isUser: false },
      { id: 2, text: "Sure, I'd be happy to help. What are you working on?", timestamp: "1 day ago", isUser: true },
    ]
  },
  {
    id: 3,
    senderId: 5,
    senderName: 'David Kim',
    senderImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    messages: [
      { id: 1, text: "Hello! I'm looking for someone with frontend skills for a DevOps project. Interested?", timestamp: "3 days ago", isUser: false },
    ]
  }
];