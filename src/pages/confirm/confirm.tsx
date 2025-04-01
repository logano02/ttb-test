import ConfirmView from "../../sections/confirm/view";
import { Helmet } from "react-helmet-async";

import { CONFIG } from "../../config-global";

const metadata = { title: `Sign in - ${CONFIG.site.name}` };
const Confirm = () => {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <ConfirmView />
    </>
  );
};

export default Confirm;
