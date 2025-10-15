import { resetApolloLink } from '@shared/apollo/client';
import { useEffect, useState } from 'react';

import { useCookiesManager } from './useCookiesManager';

export const useAuth = () => {
  const { getAccessToken, hasAccessToken, clearAll, setAccessToken, setRefreshToken } =
    useCookiesManager();

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Start with loading true

  // Initialize auth state on mount
  useEffect(() => {
    setIsSignedIn(hasAccessToken());
    //setIsSignedIn(true);
    setLoading(false);
  }, [hasAccessToken]);

  const logout = async () => {
    await resetApolloLink('');
    clearAll();
    setIsSignedIn(false);
  };

  const setTokens = async (accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    await resetApolloLink(accessToken);
    setIsSignedIn(true);
  };

  return {
    // Auth State
    authenticated: isSignedIn,
    authenticating: loading,
    accessToken: getAccessToken(),

    // Auth Actions
    logout,
    setTokens,
  };
};
