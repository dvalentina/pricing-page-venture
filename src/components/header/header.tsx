import Link from "next/link";
import Button from "../button/button";
import HeaderLink from "./header-link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex fixed w-full items-center justify-center bg-bg-primary">
      <div className="flex max-w-(--content-max-width) w-full justify-between items-center py-6 px-20">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/venture-logo-text.svg"
            alt="Venture logo"
            width={115}
            height={28}
            priority
          />
        </Link>
        <nav className="flex gap-10">
          <HeaderLink href="/about">About</HeaderLink>
          <HeaderLink href="/features">Features</HeaderLink>
          <HeaderLink href="/pricing">Pricing</HeaderLink>
          <HeaderLink href="/blog">Blog</HeaderLink>
        </nav>
        <div className="flex gap-4">
          <Button variant="link" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button variant="primary" asChild>
            <Link href="/getstarted">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
