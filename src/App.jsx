import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Add from "./components/pages/Add";
// import { DarkModeProvider } from "./components/Home/DarkMode";
import Edit from "./components/pages/Edit";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";
import { AuthProvider } from "./components/Auth";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/add"
            element={
              <RequireAuth>
                <Add />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <RequireAuth>
                <Edit />{" "}
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />{" "}
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
