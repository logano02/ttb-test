import { setSession } from "./utils";
import { jwtDecode } from "jwt-decode";

// ----------------------------------------------------------------------

/** **************************************
 *  Sign in
 *************************************** */
export const signInSetSession = async (loginData: string): Promise<void> => {
  try {
    if (!loginData) throw new Error("Credential token not found in response");
    const response = jwtDecode(loginData ?? "");
    const { exp } = response;

    if (!exp) {
      throw new Error("Credential token expiration not found in response");
    }
    setSession(loginData);
  } catch (error) {
    console.error("Error during sign in:", error);
    throw error;
  }
};
