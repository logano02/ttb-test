import "./App.css";
import { Router } from "./routes/sections/";
import { AuthProvider } from ".//auth/context/jwt";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./redux/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        {/* your app content here */}
        <Router />
      </AuthProvider>
    </ReduxProvider>
  );
}

export default App;
