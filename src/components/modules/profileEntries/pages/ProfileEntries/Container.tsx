import { memo } from "react";

import { Component } from "./Component";

export const Container: React.FC = memo(() => {
  return <Component />;
});

Container.displayName = "ProfilesContainer";
