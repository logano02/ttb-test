import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

type Props = {
  readonly title: string;
};
export default function InfoTooltip({ title }: Props) {
  return (
    <Tooltip title={title}>
      <IconButton>
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
}
