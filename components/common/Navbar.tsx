import Image from "next/image";
import Link from "next/link";
import logo from "../../media/images/logo.png";

const Navbar = () => {
  return (
    <div className="bg-secondary text-white py-4 px-5 flex justify-between">
      <Link href="/">
        <Image src={logo} alt="DBS logo" width={80} />
      </Link>
    </div>
  );
};

export default Navbar;
