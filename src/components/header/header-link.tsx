"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  href: string;
}

function HeaderLink({ children, href }: Props) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={clsx(
        "text-body text-content-dark-primary",
        pathname.includes(href.toLowerCase()) && "font-semibold"
      )}
    >
      {children}
    </Link>
  );
}

export default HeaderLink;
