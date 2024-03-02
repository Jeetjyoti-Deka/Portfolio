import { NAV_LINKS } from "../lib/constants";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-screen h-20 px-6 flex items-center justify-between border-b-2 border-solid shadow-md">
      <h1 className="poppins-medium text-2xl">Jeetjyoti Deka</h1>
      <div className="flex items-center gap-x-6">
        {NAV_LINKS.map((link) => (
          <a
            className="poppins-medium text-lg"
            key={link.route}
            href={link.route}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
