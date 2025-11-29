import { Tooltip } from "../tooltip/tooltip";
import InfoIcon from "public/info-icon.svg";

function InfoTooltip({ content }: { content: string }) {
  return (
    <Tooltip content={content}>
      <InfoIcon />
    </Tooltip>
  );
}

export default InfoTooltip;
