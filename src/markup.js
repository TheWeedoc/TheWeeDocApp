import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

// Use dynamic imports for route components
const HomePage = React.lazy(() => import("./pages/Homepage/HomePage"));
const Indivialpage = React.lazy(() =>
  import("./pages/IndivialVideopage/Indivialpage")
);
const Signuppage = React.lazy(() => import("./pages/loginflow/signuppage"));
const SignupQuestions = React.lazy(() =>
  import("./pages/loginflow/SignupQuestions")
);

const Loginpage = React.lazy(() => import("./pages/loginflow/Loginpage"));
const Searchpage = React.lazy(() => import("./pages/searchpage/Searchpage"));
const Resetpage = React.lazy(() => import("./pages/loginflow/Resetpage"));
const NewPasswordPage = React.lazy(() =>
  import("./pages/loginflow/NewPasswordPage")
);
const Uploadpage = React.lazy(() => import("./pages/UploadPage/Uploadpage"));
const Uploadpageads = React.lazy(() =>
  import("./pages/UploadPage/Uploadpageads")
);
const VerifyPage = React.lazy(() => import("./pages/loginflow/VerifyPage"));
const ResetChange = React.lazy(() => import("./pages/loginflow/ResetChange"));
const Myprofile = React.lazy(() => import("./pages/Myprofile/Myprofile"));
const OthersProfile = React.lazy(() =>
  import("./pages/OthersProfile/OthersProfile")
);
const Editprofile = React.lazy(() => import("./pages/Myprofile/Editprofile"));
const PrivacyPolicy = React.lazy(() =>
  import("./pages/PrivacyPolicy/PrivacyPolicy")
);

function Markup() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div>
      <BrowserRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            {/* <Route exact path="/video/:id/:name" element={<Indivialpage />} /> */}
            <Route exact path="/video/:id" element={<Indivialpage />} />
            <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route exact path="/search" element={<Searchpage />} />

            {/* Protected Routes */}

            {isLoggedIn ? (
              <>
                <Route exact path="/upload" element={<Uploadpage />} />
                <Route exact path="/uploadads" element={<Uploadpageads />} />
                <Route exact path="/myprofile" element={<Myprofile />} />
                <Route exact path="/edit_profile" element={<Editprofile />} />
                <Route exact path="/profile/:id" element={<OthersProfile />} />
              </>
            ) : (
              <>
                <Route
                  exact
                  path="/upload"
                  element={<Navigate to="/login" />}
                />
                <Route
                  exact
                  path="/uploadads"
                  element={<Navigate to="/login" />}
                />
                <Route
                  exact
                  path="/myprofile"
                  element={<Navigate to="/login" />}
                />
                <Route
                  exact
                  path="/edit_profile"
                  element={<Navigate to="/login" />}
                />
                <Route
                  exact
                  path="/profile/:id"
                  element={<Navigate to="/login" />}
                />
              </>
            )}

            {/* <<<<=====================Login Auth Flow========================>>> */}
            {!isLoggedIn ? (
              <>
                <Route exact path="/signup" element={<Signuppage />} />
                <Route exact path="/login" element={<Loginpage />} />
                <Route path="/signupques/:id" element={<SignupQuestions />} />
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
                <Route path="/signupques/:id" element={<SignupQuestions />} />
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/reset_password" element={<Navigate to="/" />} />
                <Route path="/change_password" element={<Navigate to="/" />} />
                <Route path="/Verify_mail" element={<Navigate to="/" />} />
                <Route path="/reset_mail_sent" element={<Navigate to="/" />} />
              </>
            )}
            {/* <<<<=====================Login Auth Flow========================>>> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default Markup;
