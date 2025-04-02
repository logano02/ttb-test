import { JwtPayload } from "jwt-decode";
import { paths } from "../../../routes/paths";

import axios from "../../../utils/axios";

import { STORAGE_KEY } from "./constant";

// ----------------------------------------------------------------------

export function jwtDecode(token: string) {
  try {
    if (!token) return null;

    const parts = token.split(".");
    if (parts.length < 2) {
      throw new Error("Invalid token!");
    }

    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const decoded = JSON.parse(atob(base64));

    return decoded;
  } catch (error) {
    console.error("Error decoding token:", error);
    throw error;
  }
}

// ----------------------------------------------------------------------

export function isValidToken(accessToken: string) {
  if (!accessToken) {
    return false;
  }

  try {
    const decoded = jwtDecode(accessToken);

    if (!decoded || !("exp" in decoded)) {
      return false;
    }

    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  } catch (error) {
    console.error("Error during token validation:", error);
    return false;
  }
}

// ----------------------------------------------------------------------

export function tokenExpired(exp: number) {
  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;

  setTimeout(() => {
    try {
      alert("Token expired!");
      localStorage.removeItem(STORAGE_KEY);
      window.location.href = paths.auth.jwt.signIn;
    } catch (error) {
      console.error("Error during token expiration:", error);
      throw error;
    }
  }, timeLeft);
}

// ----------------------------------------------------------------------

export async function setSession(credentialToken: string | null) {
  try {
    if (credentialToken) {
      const credentials: JwtPayload = jwtDecode(credentialToken);
      const currentTime = Date.now() / 1000;

      if (!credentials?.exp || credentials.exp < currentTime) removeToken();
      else localStorage.setItem(STORAGE_KEY, credentialToken);
    } else {
      removeToken();
    }
  } catch (error) {
    console.error("Error during set session:", error);
    throw error;
  }
}

const removeToken = () => {
  localStorage.removeItem(STORAGE_KEY);
  delete axios.defaults.headers.common.Authorization;
};
