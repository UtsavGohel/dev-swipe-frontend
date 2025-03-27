import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { appStore } from "./store/appStore";
import Header from "./components/Header";
import UserMenu from "./components/UserMenu";
import Footer from "./components/Footer";
import useAuth from "./hook/useAuth";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  const { fetchUser, handleLogout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isLoggedIn } = useSelector((store: any) => store?.user);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Provider store={appStore}>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <Header
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            isLoggedIn={isLoggedIn}
          />
          <UserMenu
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            handleLogout={handleLogout}
          />
          <main className="max-w-6xl mx-auto py-6 px-4">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
