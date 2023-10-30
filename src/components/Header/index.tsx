"use client";
import Image from "next/image";

import Link from "next/dist/client/link";
import { useState } from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = useState<linkRoute>();
  const handleLinkClick = (link: linkRoute) => setActiveLink(link);
  const linkClass = (link: linkRoute) =>
    activeLink === link ? "text-green-500" : "";
  enum linkRoute {
    home,
    emphasis,
    explore,
    portfolio,
  }

  return (
    <main className="flex justify-between px-[13vw] pt-4 [&>*]:cursor-pointer">
      <section>
        <Link href="/" onClick={() => handleLinkClick(linkRoute.home)}>
          <Image
            src="/homeLogo.svg"
            alt="foto da logo portfolioManager"
            width={40}
            height={40}
          />
        </Link>
      </section>
      <section className="flex gap-4">
        <Link
          href="/emphasis"
          onClick={() => handleLinkClick(linkRoute.emphasis)}
          className={linkClass(linkRoute.emphasis)}
        >
          Destaque
        </Link>
        <Link
          href="/explore"
          onClick={() => handleLinkClick(linkRoute.explore)}
          className={linkClass(linkRoute.explore)}
        >
          Explorar
        </Link>
        <Link
          href="/portfolio"
          className={linkClass(linkRoute.portfolio)}
          onClick={() => handleLinkClick(linkRoute.portfolio)}
        >
          Portfólio
        </Link>
      </section>
    </main>
  );
};
