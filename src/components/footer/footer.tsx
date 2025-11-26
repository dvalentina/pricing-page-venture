import Link from "next/link";
import Image from "next/image";
import { footerLinks, socials } from "./constants";
import Button from "../button/button";

function Footer() {
  return (
    <footer className="flex w-full items-center justify-center bg-bg-secondary">
      <div className="flex w-full max-w-(--content-max-width) flex-col py-16 px-30 gap-9">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              // className="dark:invert"
              src="/venture-logo-text.svg"
              alt="Venture logo"
              width={165}
              height={40}
            />
          </Link>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Button
                asChild
                key={social.title}
                variant="secondary"
                className="bg-bg-tertiary"
                iconOnly
              >
                <a href={social.href}>
                  <Image
                    src={social.iconSrc}
                    alt={social.title}
                    width={20}
                    height={20}
                  />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-10">
          <div className="grid grid-cols-4 gap-4 w-full">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <p className="text-body-xl font-semibold">{section.title}</p>
                <div className="flex flex-col gap-4">
                  {section.links.map((link) => (
                    <Link
                      href={link.href}
                      key={link.title}
                      className="text-body-lg text-content-dark-tertiary"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>Subscribe to our NewsLetter</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
