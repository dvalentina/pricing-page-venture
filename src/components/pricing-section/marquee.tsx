import CoinbaseLogo from "public/company-logos/coinbase-logo.svg";
import DropboxLogo from "public/company-logos/dropbox-logo.svg";
import GoogleLogo from "public/company-logos/google-logo.svg";
import SlackLogo from "public/company-logos/slack-logo.svg";
import SquareLogo from "public/company-logos/square-logo.svg";
import ZoomLogo from "public/company-logos/zoom-logo.svg";

function Marquee() {
  // TODO: animate
  return (
    <div className="flex gap-10 justify-around w-full">
      <CoinbaseLogo />
      <DropboxLogo />
      <GoogleLogo />
      <SlackLogo />
      <SquareLogo />
      <ZoomLogo />
    </div>
  );
}

export default Marquee;
