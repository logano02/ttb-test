import { Helmet } from "react-helmet-async";

import { CONFIG } from "../../config-global";

import AuthSignInView from "../../sections/auth/view";

// ----------------------------------------------------------------------

const metadata = { title: `Sign in - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AuthSignInView />
    </>
  );
}
