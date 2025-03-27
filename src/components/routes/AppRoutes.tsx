import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LandingPage from "../LandingPage";
import LoginPage from "../auth/LoginPage";
import SignupPage from "../auth/SignupPage";
import Feed from "../Feed";
import ProfileView from "../profile/ProfileView";
import MessagesList from "../messages/MessagesList";
import ChatView from "../messages/ChatView";
import SettingsView from "../settings/SettingsView";
import ConnectionsView from "../connections/ConnectionsView";
import { useSelector } from "react-redux";
import { developerProfiles } from "../../data/developerProfiles";
import { sampleMessages } from "../../data/messages";

import { settingsOptions } from "../../data/settingsOptions";
import { useState } from "react";

const AppRoutes = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isLoggedIn } = useSelector((store: any) => store.user);

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [swipedProfiles, setSwipedProfiles] = useState<number[]>([]);
  const [likedProfiles, setLikedProfiles] = useState<number[]>([]);
  const [activeChat, setActiveChat] = useState<number | null>(null);

  const currentProfile = developerProfiles[currentProfileIndex];

  const handleSwipe = (liked: boolean) => {
    if (liked) {
      setLikedProfiles([...likedProfiles, currentProfile.id]);
    }
    setSwipedProfiles([...swipedProfiles, currentProfile.id]);

    setCurrentProfileIndex((prev) =>
      prev < developerProfiles.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/feed" replace /> : <LoginPage />}
      />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate to="/feed" replace /> : <SignupPage />}
      />

      {/* Protected routes */}
      <Route
        path="/feed"
        element={
          <ProtectedRoute>
            <Feed
              currentProfile={currentProfile}
              handleSwipe={handleSwipe}
              swipedProfiles={swipedProfiles}
              likedProfiles={likedProfiles}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/connections"
        element={
          <ProtectedRoute>
            <ConnectionsView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfileView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <MessagesList
              messages={sampleMessages}
              setActiveChat={setActiveChat}
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages/:chatId"
        element={
          <ProtectedRoute>
            <ChatView chat={sampleMessages.find((m) => m.id === activeChat)!} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings/*"
        element={
          <ProtectedRoute>
            <SettingsView settingsOptions={settingsOptions} />
          </ProtectedRoute>
        }
      />

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
