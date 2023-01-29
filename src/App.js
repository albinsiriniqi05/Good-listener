import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardListener from "./Components/DashboardListener/MainListener";
import DashboardTalker from "./Components/DashboardTalker/MainTalker";
import ReviewTalkerPage from "./Components/DashboardTalker/ReviewTalkerPage";
import Header from "./Components/Header";
import OnboardListener from "./Components/OnboardListener";
import OnboardTalker from "./Components/OnboardTalker";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import ForgotPassword from "./Components/ForgotPassword.js";
import ResetPassword from "./Components/ResetPassword.js";

import { UserContext } from "./Contexts/UserContext";

function App() {
  const [user, setUser] = useState({});
  return (
    <div w="100%" h="calc(100vh)">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="" element={<div></div>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboardtalker" element={<OnboardTalker />} />
          <Route path="/onboardlistener" element={<OnboardListener />} />
          <Route path="/dashboardlistener" element={<DashboardListener />} />
          <Route path="/dashboardtalker" element={<DashboardTalker />} />
          <Route path="/reviewtalker" element={<ReviewTalkerPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </UserContext.Provider>

    </div>
  );
}

export default App;
