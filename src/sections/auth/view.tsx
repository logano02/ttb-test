import { Box, Container, Stack, Typography } from "@mui/material";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

import { signInSetSession } from "../../auth/context/jwt/action";
import { useRouter } from "../../routes/hooks";

function AuthSignInView() {
  const router = useRouter();

  // function

  const renderHeader = (
    <Stack spacing={1.5} sx={{ mb: 5, mt: 5 }}>
      <Box>
        <img
          src={"/images/logo.png"}
          alt={"/images/logo.png"}
          loading="lazy"
          width={200}
        />
      </Box>

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        The online financial management service from TTB Bank.
      </Typography>
    </Stack>
  );

  const renderContent = (
    <Stack
      spacing={1.5}
      sx={{
        mb: 5,
      }}
      height={"100%"}
    >
      <Box textAlign={"center"} display={"flex"} justifyContent={"center"}>
        <GoogleLogin
          onSuccess={(response: CredentialResponse) => {
            signInSetSession(response.credential ?? "");
            router.refresh();
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
          shape="pill"
          size="large"
          width="400"
          locale="th"
          theme="filled_blue"
          text="signin"
          type="standard"
        />
      </Box>
    </Stack>
  );

  return (
    <Stack
      height={"100vh"}
      sx={{
        background:
          "linear-gradient(90deg, #092c93 0%, #b2662c 50%, #1134b2 100%)",
      }}
    >
      <Container
        sx={{
          mt: 10,
        }}
      >
        {renderHeader}
        {renderContent}
      </Container>
    </Stack>
  );
}

export default AuthSignInView;
