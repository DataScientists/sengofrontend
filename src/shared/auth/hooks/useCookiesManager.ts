import Cookies from 'js-cookie';
import { useCallback } from 'react';

const REFRESH_TOKEN_KEY = 'ts.session.refreshToken';
const ACCESS_TOKEN_KEY = 'ts.session.accessToken';

const cookieConfig = {
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'Strict' as const,
  path: '/',
};

export function useCookiesManager() {
  // ─── Getters ───────────────────────────────────────────
  const getRefreshToken = useCallback((): string => {
    return Cookies.get(REFRESH_TOKEN_KEY) ?? '';
  }, []);

  const getAccessToken = useCallback((): string => {
    return Cookies.get(ACCESS_TOKEN_KEY) ?? '';
  }, []);

  // ─── Setters ───────────────────────────────────────────
  const setRefreshToken = useCallback((token: string): void => {
    Cookies.set(REFRESH_TOKEN_KEY, token, cookieConfig);
  }, []);

  const setAccessToken = useCallback((token: string): void => {
    Cookies.set(ACCESS_TOKEN_KEY, token, cookieConfig);
  }, []);

  // ─── Checkers ──────────────────────────────────────────
  const hasRefreshToken = useCallback((): boolean => {
    return Cookies.get(REFRESH_TOKEN_KEY) !== undefined;
  }, []);

  const hasAccessToken = useCallback((): boolean => {
    return Cookies.get(ACCESS_TOKEN_KEY) !== undefined;
  }, []);

  // ─── Cleaners ──────────────────────────────────────────
  const clearRefreshToken = useCallback((): void => {
    Cookies.remove(REFRESH_TOKEN_KEY, { path: cookieConfig.path });
  }, []);

  const clearAccessToken = useCallback((): void => {
    Cookies.remove(ACCESS_TOKEN_KEY, { path: cookieConfig.path });
  }, []);

  const clearAll = useCallback((): void => {
    [REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY].forEach((key) => {
      Cookies.remove(key, { path: cookieConfig.path });
    });
  }, []);

  return {
    getRefreshToken,
    getAccessToken,
    setRefreshToken,
    setAccessToken,
    hasRefreshToken,
    hasAccessToken,
    clearRefreshToken,
    clearAccessToken,
    clearAll,
  };
}
