import { FOOTER_LINKS } from "../lib/constants";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-slate-200 flex flex-col items-center justify-center py-10 mt-10">
      <h2 className="poppins-medium text-sm sm:text-xl">
        Crafted with ❤️ by Jeetjyoti Deka - 2024
      </h2>
      <hr className="w-36 sm:w-64 h-1 bg-slate-700 rounded-full mt-3 mb-4" />
      <p className="poppins-light text-sm sm:text-lg mb-2">Contact Info</p>
      <div className="flex items-center justify-center gap-x-4">
        {FOOTER_LINKS.map((link) => (
          <FooterLink key={link.href} img={link.img} href={link.href} />
        ))}
      </div>
    </footer>
  );
};
export default Footer;
