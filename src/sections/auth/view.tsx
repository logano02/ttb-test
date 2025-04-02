import { Button, Container, Stack, Typography } from "@mui/material";

import {
  CredentialResponse,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";

import { signInSetSession } from "../../auth/context/jwt/action";
import { useRouter } from "../../routes/hooks";

function AuthSignInView() {
  const router = useRouter();

  // state

  // function

  const renderHeader = (
    <Stack spacing={1.5} sx={{ mb: 5, mt: 5 }}>
      <Typography variant="h4">TTB</Typography>

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        'TITLE'
      </Typography>
    </Stack>
  );

  const renderContent = (
    <Stack spacing={1.5} sx={{ mb: 5 }}>
      <GoogleLogin
        onSuccess={(response: CredentialResponse) => {
          signInSetSession(response.credential ?? "");
          router.refresh();
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <Button onClick={() => googleLogout()}>Log out </Button>
    </Stack>
  );
  return (
    <Container sx={{ mt: 10 }}>
      {renderHeader}
      {renderContent}
    </Container>
  );
}

export default AuthSignInView;
