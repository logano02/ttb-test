/* eslint-disable @typescript-eslint/no-explicit-any */
import { paths } from "../src/routes/paths";

export const CONFIG: any = {
  site: {
    name: "Tracer",
    serverUrl: import.meta.env.VITE_SERVER_URL ?? "",
    apiKey: import.meta.env.VITE_SERVER_URL ?? "",
    publicKey: import.meta.env.RSA_LOGIN_PUBLIC_KEY ?? "",
    privateKey: import.meta.env.RSA_LOGIN_PRIVATE_KEY ?? "",
    hostApi: import.meta.env.VITE_HOST_API,
  },

  auth: {
    method: "auth",
    skip: false,
    redirectPath: paths.dashboard.root,
  },
};
