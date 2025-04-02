import "./App.css";
import { Router } from "./routes/sections/";
import { AuthProvider } from ".//auth/context/jwt";
import { Provider as ReduxProvider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { CONFIG } from "./config-global";

import { store } from "./redux/store";

const CLIENT_ID = CONFIG.site.googleClientId;

function App() {
  return (
    <ReduxProvider store={store}>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <AuthProvider>
          {/* your app content here */}
          <Router />
        </AuthProvider>
      </GoogleOAuthProvider>
    </ReduxProvider>
  );
}

export default App;
