import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import UserMenu from "./components/UserMenu";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import Feed from "./components/Feed";
import ProfileView from "./components/profile/ProfileView";
import MessagesList from "./components/messages/MessagesList";
import ChatView from "./components/messages/ChatView";
import SettingsView from "./components/settings/SettingsView";
import ConnectionsView from "./components/connections/ConnectionsView";

// Import data
import { developerProfiles } from "./data/developerProfiles";
import { sampleMessages } from "./data/messages";
import { userProfile } from "./data/userProfile";
import { settingsOptions } from "./data/settingsOptions";
import { Provider, useDispatch, useSelector } from "react-redux";
import { appStore } from "./store/appStore";
import { addUser, removeUser } from "./store/slices/userSlice";
import axios from "axios";
import { baseUrl } from "./constants/apiEndpoint.const";

function App() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [swipedProfiles, setSwipedProfiles] = useState<number[]>([]);
  const [likedProfiles, setLikedProfiles] = useState<number[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  const [activeChat, setActiveChat] = useState<number | null>(null);

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { userData, isLoggedIn } = useSelector((store: any) => store?.user);

  const fetchUser = async () => {
    try {
      if (userData) return;
      const user = await axios.post(
        `${baseUrl}/users/get-profile`,
        {},
        { withCredentials: true }
      );

      if (!user.data) {
        // navigate("/login");
      }

      dispatch(addUser(user.data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.status === 401) {
        // navigate("/login");
      }
      throw new Error(error); // will make error page and show error there
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const currentProfile = developerProfiles[currentProfileIndex];

  const handleSwipe = (liked: boolean) => {
    if (liked) {
      setLikedProfiles([...likedProfiles, currentProfile.id]);
    }
    setSwipedProfiles([...swipedProfiles, currentProfile.id]);

    if (currentProfileIndex < developerProfiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      setCurrentProfileIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentProfileIndex > 0) {
      setCurrentProfileIndex(currentProfileIndex - 1);
    } else {
      setCurrentProfileIndex(developerProfiles.length - 1);
    }
  };

  const handleNext = () => {
    if (currentProfileIndex < developerProfiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      setCurrentProfileIndex(0);
    }
  };
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${baseUrl}/users/logout`,
        {},
        { withCredentials: true }
      );

      console.log(res);

      if (res.status === 200) {
        dispatch(removeUser());
      }

      throw res.data.message;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };

  // Protected Route wrapper component
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
  };

  return (
    <Provider store={appStore}>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <Header
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            isLoggedIn={isLoggedIn}
          />

          {isLoggedIn && (
            <UserMenu
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              handleLogout={handleLogout}
            />
          )}

          <main className="max-w-6xl mx-auto py-6 px-4">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/login"
                element={
                  isLoggedIn ? (
                    <Navigate to="/feed" replace />
                  ) : (
                    <LoginPage setIsLoggedIn={isLoggedIn} />
                  )
                }
              />
              <Route
                path="/signup"
                element={
                  isLoggedIn ? (
                    <Navigate to="/feed" replace />
                  ) : (
                    <SignupPage setIsLoggedIn={isLoggedIn} />
                  )
                }
              />

              {/* Protected routes */}
              <Route
                path="/feed"
                element={
                  <ProtectedRoute>
                    <Feed
                      currentProfile={currentProfile}
                      handlePrevious={handlePrevious}
                      handleNext={handleNext}
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
                    <ProfileView userProfile={userProfile} />
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
                    <ChatView
                      chat={sampleMessages.find((m) => m.id === activeChat)!}
                      setActiveChat={setActiveChat}
                    />
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
          </main>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
