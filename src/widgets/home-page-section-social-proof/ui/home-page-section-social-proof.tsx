import CoinbaseLogo from "public/company-logos/coinbase-logo.svg";
import DropboxLogo from "public/company-logos/dropbox-logo.svg";
import GoogleLogo from "public/company-logos/google-logo.svg";
import SlackLogo from "public/company-logos/slack-logo.svg";
import SquareLogo from "public/company-logos/square-logo.svg";
import ZoomLogo from "public/company-logos/zoom-logo.svg";

export function SocialProofSection() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-(--content-max-width) flex justify-between items-center gap-10 px-20 py-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-h2 text-content-dark-primary max-w-[584px]">
            Trusted by Many Established Companies
          </h2>
          <p className="text-body-xl text-content-dark-secondary font-normal max-w-[406px]">
            20+ Businesses and Companies use Venture for their CRM Platform
          </p>
        </div>
        <div className="flex flex-col gap-8 items-end">
          <div className="flex gap-12">
            <CoinbaseLogo />
            <DropboxLogo />
            <GoogleLogo />
          </div>
          <div className="flex gap-12">
            <SlackLogo />
            <SquareLogo />
            <ZoomLogo />
          </div>
        </div>
      </div>
    </section>
  );
}
