import CoinbaseLogo from "public/company-logos/coinbase-logo.svg";
import DropboxLogo from "public/company-logos/dropbox-logo.svg";
import GoogleLogo from "public/company-logos/google-logo.svg";
import SlackLogo from "public/company-logos/slack-logo.svg";
import SquareLogo from "public/company-logos/square-logo.svg";
import ZoomLogo from "public/company-logos/zoom-logo.svg";
import Marquee from "../marquee/marquee";

function MarqueeLogos() {
  const logos = [
    <CoinbaseLogo key="coinbase-logo" />,
    <DropboxLogo key="dropbox-logo" />,
    <GoogleLogo key="google-logo" />,
    <SlackLogo key="slack-logo" />,
    <SquareLogo key="square-logo" />,
    <ZoomLogo key="zoom-logo" />,
  ];

  return (
    <Marquee>
      <div className="flex w-full *:mr-21">{logos}</div>
    </Marquee>
  );
}

export default MarqueeLogos;
