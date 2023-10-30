import Link from "next/link";

export const Header = () => {
  return (
    <main className="flex justify-between px-[13vw] pt-4 [&>*]:cursor-pointer">
      <section>
        <Link href="/">Home</Link>
      </section>
      <section className="flex gap-4">
        <Link href="/about">Destaque</Link>
        <Link href="/portfolio">Explorar</Link>
        <Link href="/contact">Portfólio</Link>
      </section>
    </main>
  );
};
