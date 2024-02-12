import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";

const Navbar = () => {
  return (
    <nav>
      <Image src={Logo} alt="logo" width={90} quality={100} />
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Ticket</Link>
    </nav>
  );
};

export default Navbar;
