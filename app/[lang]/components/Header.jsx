import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/10 flex items-center justify-between">
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src="/logo.svg" width={139} height={26} alt="" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/ring.svg" width="24" height="24" alt="" />
            </Link>
          </li>
          {/* <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/icons/sun.svg" width="24" height="24" alt="" />
            </Link>
          </li> */}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/shopping-cart.svg" width="24" height="24" alt="" />
            </Link>
          </li>
        </ul>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
