import AOS from "aos";
import "aos/dist/aos.css";
import { Layout } from "layout/Layout";
import { AcceptMobileView } from "pages/AcceptMobile";
import { CollectiveDetails } from "pages/CollectiveDetails";
import { CollectiveLayout } from "pages/CollectiveLayout";
import { Explore } from "pages/Explore";
import { ForumDetails } from "pages/ForumDetails";
import Mint from "pages/mint";
import NotFound from "pages/notFound";
import PrivacyPolicy from "pages/privacyPolicy";
import { SupporterProfile } from "pages/SupporterProfile";
import { useContext, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ToastListener from "./components/ToastListener";
import { ThemeContext } from "./contexts/ThemeContext";
import useEagerConnect from "./hooks/useEagerConnect";
import { useFetchProfile } from "./state/profile/hooks";
import "./_app.scss";

const AppContainer = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ theme }) => theme.colors.text};
`;

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    if (isMobile && localStorage.getItem("openMobile") !== "true") {
      navigate("/acceptMobile");
    } else {
      if (window.location.pathname === "/acceptMobile") {
        navigate("/");
      }
    }
  }, [isMobile, localStorage.getItem("openMobile")]);
  useFetchProfile();

  useEagerConnect();
  return (
    <AppContainer bgColor={isDark ? "#100C18" : "#F9FAFB"}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/collective/THEIA" />} />
          <Route path="/home" element={<Navigate to="/collective/THEIA" />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/acceptMobile" element={<AcceptMobileView />} />
          <Route path={"/collective"} element={<CollectiveLayout />}>
            <Route path=":cname" element={<CollectiveDetails />} />
            <Route path=":cname/:ctab" element={<CollectiveDetails />} />
            <Route
              path=":cname/:ctab/:post_id"
              element={<CollectiveDetails />}
            />
            <Route
              path=":cname/:ctab/details/:event_id"
              element={<CollectiveDetails />}
            />
            <Route
              path=":cname/details/:post_id/:prev_tab"
              element={<ForumDetails />}
            />

          </Route>
          <Route path={"/member/:membername"} element={<SupporterProfile />} />
          <Route path={"/profile/supporter"} element={<SupporterProfile />} />

          <Route
            path={"/member/:membername/:tabItem"}
            element={<SupporterProfile />}
          />
          <Route path={"/explore/:type"} element={<Explore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ToastListener />
    </AppContainer>
  );
}

export default App;