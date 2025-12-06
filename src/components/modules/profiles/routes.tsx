import { Route } from "react-router";

import { Container as ProfilesPage } from "./pages/Profiles/Container";
import { ProfileDetailPage } from "./pages/ProfileDetail";
import { profileDetailRoute, profilesSection } from "./urls";

export const ProfilesRoute = (
  <>
    <Route path={profilesSection} element={<ProfilesPage />} />
    <Route path={profileDetailRoute} element={<ProfileDetailPage />} />
  </>
);
