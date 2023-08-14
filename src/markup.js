import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import useIsLoggedIn from "./Hooks/useIsLoggedIn";

// Use dynamic imports for route components
const HomePage = React.lazy(() => import("./pages/Homepage/HomePage"));
const Indivialpage = React.lazy(() =>
  import("./pages/IndivialVideopage/Indivialpage")
);
const Signuppage = React.lazy(() => import("./pages/loginflow/signuppage"));
const Loginpage = React.lazy(() => import("./pages/loginflow/Loginpage"));
const Searchpage = React.lazy(() => import("./pages/searchpage/Searchpage"));
const Resetpage = React.lazy(() => import("./pages/loginflow/Resetpage"));
const NewPasswordPage = React.lazy(() =>
  import("./pages/loginflow/NewPasswordPage")
);
const Uploadpage = React.lazy(() => import("./pages/UploadPage/Uploadpage"));
const VerifyPage = React.lazy(() => import("./pages/loginflow/VerifyPage"));
const ResetChange = React.lazy(() => import("./pages/loginflow/ResetChange"));
const Myprofile = React.lazy(() => import("./pages/Myprofile/Myprofile"));
const Editprofile = React.lazy(() => import("./pages/Myprofile/Editprofile"));
const PrivacyPolicy = React.lazy(() =>
  import("./pages/PrivacyPolicy/PrivacyPolicy")
);

function Markup() {
  const isLoggedIn = useIsLoggedIn();
  return (
    <div>
      <BrowserRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/video/:id/:name" element={<Indivialpage />} />
            <Route exact path="/search" element={<Searchpage />} />
            <Route exact path="/upload" element={<Uploadpage />} />
            <Route exact path="/myprofile" element={<Myprofile />} />
            <Route exact path="/edit_profile" element={<Editprofile />} />
            <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />

            {/* <<<<=====================Login Auth Flow========================>>> */}
            {!isLoggedIn ? (
              <>
                <Route exact path="/signup" element={<Signuppage />} />
                <Route exact path="/login" element={<Loginpage />} />
                <Route exact path="/reset_password" element={<Resetpage />} />
                <Route
                  exact
                  path="/change_password"
                  element={<NewPasswordPage />}
                />
                <Route exact path="/Verify_mail" element={<VerifyPage />} />
                <Route
                  exact
                  path="/reset_mail_sent"
                  element={<ResetChange />}
                />
              </>
            ) : (
              <>
                <Route path="/signup" element={<Navigate to="/" />} />
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/reset_password" element={<Navigate to="/" />} />
                <Route path="/change_password" element={<Navigate to="/" />} />
                <Route path="/Verify_mail" element={<Navigate to="/" />} />
                <Route path="/reset_mail_sent" element={<Navigate to="/" />} />
              </>
            )}
            {/* <<<<=====================Login Auth Flow========================>>> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default Markup;
