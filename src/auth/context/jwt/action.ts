import type { ILoginResponse } from "../../../redux/rtk-query/auth/types";

import axios, { endpoints } from "../../../utils/axios";

import { setSession } from "./utils";
import { STORAGE_KEY } from "./constant";

// ----------------------------------------------------------------------

export type SignInParams = {
  email: string;
  password: string;
};

export type SignUpParams = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

/** **************************************
 * Sign in
 *************************************** */
export const signInWithPassword = async ({
  email,
  password,
}: SignInParams): Promise<void> => {
  try {
    const params = { email, password };

    const res = await axios.post(endpoints.auth.signIn, params);

    const { accessToken } = res.data;

    if (!accessToken) {
      throw new Error("Access token not found in response");
    }

    setSession(accessToken, null);
  } catch (error) {
    console.error("Error during sign in:", error);
    throw error;
  }
};

/** **************************************
 *  Sign in
 *************************************** */
export const signInSetSession = async (
  loginData: ILoginResponse
): Promise<void> => {
  try {
    const { accessToken, adminId } = loginData;

    if (!accessToken) {
      throw new Error("Access token not found in response");
    }

    setSession(accessToken, adminId);
  } catch (error) {
    console.error("Error during sign in:", error);
    throw error;
  }
};

/** **************************************
 * Sign up
 *************************************** */
export const signUp = async ({
  email,
  password,
  firstName,
  lastName,
}: SignUpParams): Promise<void> => {
  const params = {
    email,
    password,
    firstName,
    lastName,
  };

  try {
    const res = await axios.post(endpoints.auth.signUp, params);

    const { accessToken } = res.data;

    if (!accessToken) {
      throw new Error("Access token not found in response");
    }

    localStorage.setItem(STORAGE_KEY, accessToken);
  } catch (error) {
    console.error("Error during sign up:", error);
    throw error;
  }
};

/** **************************************
 * Sign out
 *************************************** */
export const signOut = async (): Promise<void> => {
  try {
    await setSession(null, null);
  } catch (error) {
    console.error("Error during sign out:", error);
    throw error;
  }
};
